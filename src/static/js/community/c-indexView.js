/**
 * Created by kailin on 2016/2/13.
 */

define([
    'jquery',
    'underscore',
    'backbone',
    'c-articleView',
    'c-articleCollection',
    '../common',
    '../templates/cp-article',
    '../templates/cp-index',
    '../templates/cp-tag'
], function ($, _, Backbone,ArticleView,Articles,Common,Article,Index,Tag) {
    'use strict';
    var IndexView = Backbone.View.extend({
        el:$('.cl'),
        events:{
            'click .wt':'wFooterShow',
            'keypress .wi':'tagEnter',
            'click .w-btn':'writeAdd',
            'click .w-tag':'tagDel'
        },
        initialize: function () {
            this.render();
            this.listenTo(Articles, 'add', this.addOne);
            this.listenTo(Articles, 'reset', this.addAll);

        },
        render:function(){
            this.$writeTpt = Index();
            this.$el.html(this.$writeTpt);//左侧模板
            this.$wBox = $('.c-wt');
            this.$wTextarea = $('.wt');
            this.$aBox = $('.c-at');//文章外框
            this.$wFooterBox = $('.w-footer');
            this.$tagInput = $('.wi');//tag框
            this.$ArticleList = $('.c-at');
            Articles.fetch({reset:true});//reset 之后触发addAll

        },
        wFooterShow:function(){
            this.$wFooterBox.removeClass('f-hidden');
        },
        tagEnter:function(e){
            var tagVal = this.$tagInput.val();
            if (e.which !== Common.ENTER_KEY || !tagVal.trim()) {
                return;
            }//如果为空或者按键不是回车
            var tagArr = tagVal.split(',');
            var tagElement = Tag({tag:tagArr});//标签模板
            this.$tagInput.before(tagElement);//插入html
            this.$tagInput.val('');
        },
        newAttributes: function () {
            return {
                author:'一碗虾仁',
                content:this.$wTextarea.val().split('\n'),
                tags:this.tagsItem(),
                isMe:true,
                picture:[],
                hot:0,
                discuss:[],
                love:false
            };
        },
        tagsItem: function () {
            var tagsArr = [];
            this.$wFooterBox.children('.w-tag').each(function(){
                var thisTag = $(this).text();
                tagsArr.push(thisTag.substr(1,thisTag.length-1));
            });
            return tagsArr;
        },
        writeAdd: function () {
            if(this.$wTextarea.val()){
                Articles.create(this.newAttributes(),{
                    success:function(model,data){
                        console.log(data);//返回数据
                    }
                });
                this.writeBoxClean();//发布后清空输入框和标签框
            }
            else{
                alert('内容不得为空');
            }
        },
        writeBoxClean:function(){
            this.$wTextarea.val('');
            this.$wFooterBox.find('.w-tag').remove();
            this.$wFooterBox.addClass('f-hidden');
        },
        addOne:function(article){
            var articleView = new ArticleView({ model: article });
            this.$aBox.prepend(articleView.render().el);//render函数返回articleView  el即$('.r-a')那行元素
        },
        addAll: function () {
            this.$ArticleList.empty();//清空列表
            Articles.each(this.addOne, this);
        },
        tagDel: function (e) {
            e.target.remove();//删除触发时间的元素
        }
    });
    return IndexView;
});
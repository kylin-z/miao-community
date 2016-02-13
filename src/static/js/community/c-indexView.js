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
            'click .w-btn':'writeAdd'
        },
        initialize: function () {
            this.render();
            this.listenTo(Articles, 'add', this.AddOne);
        },
        render:function(){
            this.$writeTpt = Index();
            this.$el.html(this.$writeTpt);//左侧模板
            this.$wBox = $('.c-wt');
            this.$wTextarea = $('.wt');
            this.$aBox = $('.c-at');//文章外框
            this.$wFooterBox = $('.w-footer');
            this.$tagInput = $('.wi');//tag框
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
                author:'',
                content:this.$wTextarea.val(),
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
            Articles.create(this.newAttributes());
            this.writeBoxClean();//发布后清空输入框和标签框

        },
        writeBoxClean:function(){
            this.$wTextarea.val('');
            this.$wFooterBox.find('.w-tag').remove();
            this.$wFooterBox.addClass('f-hidden');
        },
        AddOne:function(article){
            var articleView = new ArticleView({ model: article });
            this.$aBox.prepend(articleView.render().el);//render函数返回articleView  el即$('.r-a')那行元素
        }
    });
    return IndexView;
});
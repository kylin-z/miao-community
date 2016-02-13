/**
 * Created by kailin on 2016/2/13.
 */
//backbone中router充当部分控制器
define([
    'jquery',
    'backbone',
    '../common',
    'c-indexView',
    'c-followView',
    'c-letterView'
], function ($, Backbone,Common,IndexView,FollowView,LetterView) {
    'use strict';

    var Router = Backbone.Router.extend({
        routes: {
            '': 'index',
            'index':'index',
            'follow':'follow',
            'sub':'sub',
            'letter':'letter'
        },
        index: function () {
            this.indexView.render();
        },
        follow: function () {
            this.followView.render();
        },
        letter:function() {
            this.letterView.render();
        },
        initialize: function () {
            this.indexView = new IndexView();//new一个index视图 关联文件c-indexView.js
            this.followView = new FollowView();
            this.letterView = new LetterView();
        }
    });

    return Router;
});
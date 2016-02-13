/**
 * Created by kailin on 2016/2/13.
 */
define([
    'underscore',
    'backbone'
], function (_, Backbone) {
    'use strict';

    var ArticleModel = Backbone.Model.extend({
        defaults: {
            author:'',
            content:'',
            tags:[],
            isMe:false,
            picture:[],
            hot:0,
            discuss:[],
            love:false
        }
    });

    return ArticleModel;
});
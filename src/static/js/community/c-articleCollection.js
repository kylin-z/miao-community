/**
 * Created by kailin on 2016/2/13.
 */
define([
    'underscore',
    'backbone',
    'backboneLocalstorage',
    'c-articleModel'
], function (_, Backbone, Store, Article) {
    'use strict';

    var ArticlesCollection = Backbone.Collection.extend({
        model: Article,
        localStorage: new Store('c-index'),
    });

    return new ArticlesCollection();
});
/**
 * Created by kailin on 2016/2/12.
 */
define([
    'jquery',
    'underscore',
    'backbone',
    '../common',
    '../templates/cp-article'
], function ($, _, Backbone, Common,Article) {
    'use strict';
    var AppView = Backbone.View.extend({
        initialize: function () {
            this.$cl = $('.cl');
            $('.cl').append(Article());
        }
    });
    return AppView;
});

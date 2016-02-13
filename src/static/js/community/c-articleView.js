/**
 * Created by kailin on 2016/2/13.
 */
define([
    'jquery',
    'underscore',
    'backbone',
    '../templates/cp-article',
    '../common'
], function ($, _, Backbone, ArticleTemplate, Common) {
    'use strict';

    var ArticleView = Backbone.View.extend({

        className:  'row r-a',

        template: ArticleTemplate,

        initialize: function () {
            
        },
        render: function () {
            console.log(this.model.toJSON());
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });

    return ArticleView;
});

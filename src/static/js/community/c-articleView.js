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

        events:{
            'click .do-del':'artDel'
        },
        initialize: function () {
            this.listenTo(this.model, 'destroy', this.remove);
        },
        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },
        artDel: function () {
            this.model.destroy();//删除，触发remove
        }
    });

    return ArticleView;
});

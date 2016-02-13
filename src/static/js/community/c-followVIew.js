/**
 * Created by kailin on 2016/2/13.
 */
define([
    'jquery',
    'underscore',
    'backbone',
    '../common',
    '../templates/cp-follow',
], function ($, _, Backbone, Common,Follow) {
    'use strict';
    var FollowView = Backbone.View.extend({
        initialize: function () {
            this.$FollowBox = Follow();
            this.render();
        },
        render:function(){
            $('.cl').html(this.$FollowBox);
        }
    });
    return FollowView;
});
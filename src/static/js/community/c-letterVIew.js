/**
 * Created by kailin on 2016/2/13.
 */
define([
    'jquery',
    'underscore',
    'backbone',
    '../common',
    '../templates/cp-letter',
], function ($, _, Backbone, Common,Letter) {
    'use strict';
    var LetterView = Backbone.View.extend({
        initialize: function () {
            this.$LetterBox = Letter();
            this.render();
        },
        render:function(){
            $('.cl').html(this.$LetterBox);
        }
    });
    return LetterView;
});
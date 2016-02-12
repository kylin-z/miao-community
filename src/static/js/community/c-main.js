/**
 * Created by Arkay on 2015/12/10.
 * community系列页面主入口
 */

'use strict';

require.config({
    shim: {
        'handlebars': {
            exports: 'Handlebars'
        },
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        backboneLocalstorage: {
            deps: ['backbone'],
            exports: 'Store'
        }
    },
    paths: {
        handlebars:"../libs/handlebars-runtime",
        jquery: '../libs/jquery-min',
        underscore: '../libs/underscore-min',
        backbone: '../libs/backbone-min',
        backboneLocalstorage: '../libs/backbone-localStorage',
        text: '../libs/text'
    }
});

require([
    'backbone',
    'c-app',
], function (Backbone, AppView) {
    Backbone.history.start();
    new AppView();
});
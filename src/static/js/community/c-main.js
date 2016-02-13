/**
 * Created by Arkay on 2015/12/10.
 * communityϵ��ҳ�������
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
    'c-router'
], function (Backbone, AppView,Router) {
    new Router();
    Backbone.history.start();
    new AppView();
});
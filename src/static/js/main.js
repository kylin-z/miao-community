/**
 * Created by kailin on 2016/2/4.
 */
require.config({
    shim:{
        underscore:{
            exports:'_'
        },
        backbone:{
            deps:[
                'underscore',
                'jquery'
            ],
            exports:'Backbone'
        }
    },
    paths: {
        jquery:'libs/jquery-1.11.3.min',
        underscore:'libs/underscore-min',
        backbone:'libs/backbone-min',
        text:'libs/text'
    }
});

require([
    'backbone',
    'views/app',
],function(Backbone,AppView){
    Backbone.history.start();

    new AppView();
});
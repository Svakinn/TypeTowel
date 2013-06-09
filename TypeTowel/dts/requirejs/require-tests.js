require.config({
    baseUrl: '../Definitions',
    paths: {
        'jquery': '../Definitions/jquery',
        'underscore': '../Definitions/underscore',
        'backbone': '../Definitions/backbone'
    },
    shim: {
        jquery: {
            exports: '$'
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
        }
    }
});
require([
    'main'
], function (main, $, _, Backbone) {
    var app = main.AppMain();
    app.run();
});
//@ sourceMappingURL=require-tests.js.map

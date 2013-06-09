require.config({
    paths: {
        "text": "durandal/amd/text"
    }
});
define([
    'durandal/app', 
    'durandal/viewLocator', 
    'durandal/system', 
    'durandal/plugins/router', 
    'services/logger'
], function (app, viewLocator, system, router, logger) {
    system.debug(true);
    app.start().then(function () {
        logger.logger.log('app-start', app, 'main', true);
        toastr.options.positionClass = 'toast-bottom-right';
        toastr.options.backgroundpositionClass = 'toast-bottom-right';
        router.handleInvalidRoute = function (route, params) {
            logger.logger.logError('No Route Found', route, 'main', true);
        };
        router.useConvention();
        viewLocator.useConvention();
        app.adaptToDevice();
        app.setRoot('viewmodels/shell', 'entrance');
    });
});
//@ sourceMappingURL=main.js.map

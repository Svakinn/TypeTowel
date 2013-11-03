define(["require", "exports", 'plugins/router', 'services/logger', 'durandal/system'], function(require, exports, __m_router__, __m_logger__, __m_system__) {
    var m_router = __m_router__;
    var m_logger = __m_logger__;
    var m_system = __m_system__;

    var shell = {
        activate: activate,
        router: m_router
    };
    return shell;

    //#region Internal Methods
    function activate() {
        return boot();
    }

    function boot() {
        log('Hot Towel SPA Loaded!', null, true);

        m_router.on('router:route:not-found', function (fragment) {
            logError('No Route Found', fragment, true);
        });

        var routes = [
            { route: '', moduleId: 'home', title: 'Home', nav: 1 },
            { route: 'details', moduleId: 'details', title: 'Details', nav: 2 }
        ];

        return m_router.makeRelative({ moduleId: 'viewmodels' }).map(routes).buildNavigationModel().activate();
    }

    function log(msg, data, showToast) {
        m_logger.logger.log(msg, data, m_system.getModuleId(shell), showToast);
    }

    function logError(msg, data, showToast) {
        m_logger.logger.logError(msg, data, m_system.getModuleId(shell), showToast);
    }
});
//# sourceMappingURL=shell.js.map

define(["require", "exports", 'durandal/plugins/router', 'services/logger', 'durandal/system'], function(require, exports, ___router__, ___logger__, ___system__) {
    var _router = ___router__;

    var _logger = ___logger__;
    var _system = ___system__;

    exports.router = _router;
    exports.shell = {
        activate: exports.activate,
        router: exports.router
    };
    function activate() {
        return boot();
    }
    exports.activate = activate;

    function boot() {
        exports.router.mapNav('home');
        exports.router.mapNav('details');
        log('Hot Towel SPA Loaded!', null, true);
        return exports.router.activate('home');
    }

    function log(msg, data, showToast) {
        _logger.logger.log(msg, data, _system.getModuleId(exports.shell), showToast);
    }
});
//@ sourceMappingURL=shell.js.map

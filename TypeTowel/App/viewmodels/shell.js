define(["require", "exports", 'durandal/plugins/router', 'services/logger', 'durandal/system'], function(require, exports, ___router__, ___logger__, ___system__) {
    var _router = ___router__;
    var _logger = ___logger__;
    var _system = ___system__;

    var shell = {
        activate: activate,
        router: _router
    };
    return shell;

    //#region Internal Methods
    function activate() {
        return boot();
    }

    function boot() {
        _router.mapNav('home');
        _router.mapNav('details');
        log('Hot Towel SPA Loaded!', null, true);
        return _router.activate('home');
    }

    function log(msg, data, showToast) {
        _logger.logger.log(msg, data, _system.getModuleId(shell), showToast);
    }
});
//# sourceMappingURL=shell.js.map

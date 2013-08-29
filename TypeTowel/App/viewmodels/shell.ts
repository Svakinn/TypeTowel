import _router = require('durandal/plugins/router');
import _logger = require('services/logger');
import _system = require('durandal/system');

var shell = {
    activate: activate,
    router: _router
}
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
//#endregion
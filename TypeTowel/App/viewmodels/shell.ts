/// <reference path="../../dts/durandal/durandal.d.ts" />
/// <reference path="../../dts/requirejs/require.d.ts" />

import _router = module('durandal/plugins/router');
//import _app = module('durandal/app');
import _logger = module('services/logger');
import _system = module('durandal/system');

export var router = _router;
export var shell = {
    activate: activate,
    router: router
}
export function activate() {
    return boot();
}

//#region Internal Methods
function boot() {
    router.mapNav('home');
    router.mapNav('details');
    log('Hot Towel SPA Loaded!', null, true);
    return router.activate('home');
}

function log(msg, data, showToast) {
    _logger.logger.log(msg, data, _system.getModuleId(shell), showToast);
}
//#endregion


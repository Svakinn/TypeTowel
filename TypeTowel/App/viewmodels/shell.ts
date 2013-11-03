import m_router = require('plugins/router');
import m_logger = require('services/logger');
import m_system = require('durandal/system');

var shell = {
    activate: activate,
    router: m_router
}
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
        { route: 'details', moduleId: 'details', title: 'Details', nav: 2 }];

    return m_router.makeRelative({ moduleId: 'viewmodels' }) // router will look here for viewmodels by convention
        .map(routes)            // Map the routes
        .buildNavigationModel() // Finds all nav routes and readies them
        .activate();            // Activate the router
}

function log(msg, data, showToast) {
    m_logger.logger.log(msg, data, m_system.getModuleId(shell), showToast);
}

function logError(msg, data, showToast) {
    m_logger.logger.logError(msg, data, m_system.getModuleId(shell), showToast);
}
//#endregion
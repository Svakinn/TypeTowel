define(["require", "exports", 'services/logger'], function(require, exports, ___logger__) {
    var _logger = ___logger__;

    
    var DetailsView = (function () {
        function DetailsView() { }
        DetailsView.prototype.title = function () {
            return 'My Details View Title';
        };
        DetailsView.prototype.activate = function () {
            _logger.logger.log('Details View Activated', null, 'details', true);
            return true;
        };
        return DetailsView;
    })();
    exports.DetailsView = DetailsView;    
    exports.vm = new DetailsView();
    exports.displayName = exports.vm.title();
    exports.title = exports.vm.title();
    exports.activate = _activate;
    function _activate() {
        return exports.vm.activate();
    }
})
//@ sourceMappingURL=details.js.map

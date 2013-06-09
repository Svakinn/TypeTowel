define(["require", "exports", 'services/logger'], function(require, exports, ___logger__) {
    var _logger = ___logger__;

    var ViewModel = (function () {
        function ViewModel() { }
        ViewModel.prototype.title = function () {
            return 'Home View';
        };
        ViewModel.prototype.activate = function () {
            this.MyTitle = this.title() + ' with my title';
            _logger.logger.log('We are home now', null, 'home', true);
            return true;
        };
        return ViewModel;
    })();
    exports.ViewModel = ViewModel;    
    exports.vm = new ViewModel();
    exports.title = exports.vm.title();
    exports.activate = function () {
        return exports.vm.activate();
    };
})
//@ sourceMappingURL=home.js.map

define(["require", "exports", 'services/logger'], function(require, exports, ___logger__) {
    var _logger = ___logger__;

    var ViewModel = (function () {
        function ViewModel() {
            this.title = 'Home View';
        }
        ViewModel.prototype.activate = function () {
            this.MyTitle = ko.observable(this.title + " with my ko title");
            _logger.logger.log('We are home now', null, 'home', true);
            return true;
        };
        return ViewModel;
    })();
    exports.ViewModel = ViewModel;    
    exports.vm = new ViewModel();
    exports.title = exports.vm.title;
    exports.activate = function () {
        return exports.vm.activate();
    };
})
//@ sourceMappingURL=home.js.map

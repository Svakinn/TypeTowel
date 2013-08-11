define(["require", "exports", 'services/logger'], function(require, exports, ___logger__) {
    /// <reference path="../../Scripts/typings/knockout/knockout.d.ts" />
    var _logger = ___logger__;

    var ViewModel = (function () {
        function ViewModel() {
            this.title = 'Home View';
        }
        ViewModel.prototype.activate = function () {
            _logger.logger.log('We are home now', null, 'home', true);
            return true;
        };
        return ViewModel;
    })();
    exports.ViewModel = ViewModel;
    exports.vm = new ViewModel();

    //The Durandal plugin-interface variables
    exports.activate = function () {
        return exports.vm.activate();
    };
});
//# sourceMappingURL=home.js.map

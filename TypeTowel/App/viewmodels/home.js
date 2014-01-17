define(["require", "exports", 'services/logger'], function(require, exports, m_logger) {
    var ViewModel = (function () {
        function ViewModel() {
            this.title = 'Home View';
        }
        ViewModel.prototype.activate = function () {
            m_logger.logger.log('We are at home now', null, 'home', true);
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

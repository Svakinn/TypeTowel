define(["require", "exports", 'services/logger'], function(require, exports, ___logger__) {
    var _logger = ___logger__;
    

    var DetailsView = (function () {
        function DetailsView() {
            this.title = ko.observable('');
            this.countries = ko.observableArray([]);
        }
        DetailsView.prototype.activate = function () {
            this.title('My title');
            _logger.logger.log('Details View Activated', null, 'details', true);
            exports.vm.countries.push({ id: 'IS', name: 'Iceland' });
            return true;
        };

        DetailsView.prototype.clickUpdatTitle = function (newTitle) {
            this.title(newTitle);
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

    setTimeout(function () {
        exports.vm.countries.push({ id: 'GB', name: 'Great Britain' });
        exports.vm.countries.push({ id: 'US', name: 'United states' });
    }, 5000);
});
//@ sourceMappingURL=details.js.map

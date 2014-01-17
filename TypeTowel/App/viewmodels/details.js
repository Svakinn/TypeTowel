/// <reference path="../../Scripts/typings/bootstrap/bootstrap.d.ts" />
define(["require", "exports", 'services/logger'], function(require, exports, m_logger) {
    //The typescript viewmodel class
    var DetailsView = (function () {
        function DetailsView() {
            this.title = ko.observable('');
            this.countries = ko.observableArray();
            //Note that computeds and subscriptions should be initialized in constructor or activate function in typescript viewmodel class
            this.compTitle = ko.computed(function () {
                return this.title() + ' (computed)';
            }, this);
        }
        //Remember to include the viewmodel as the first parameter of the knockout binding to have it function as a member function of the class
        //See the details.html
        DetailsView.prototype.clickUpdatTitle = function (newTitle) {
            this.title(newTitle);
        };

        DetailsView.prototype.activateToolTips = function () {
            //Bootstrap tooltips must be initialized after html elements have been rendered on page
            //(after knockout bindings have been applied)
            $('.toolTip').tooltip();
        };

        //Implementation of Durandal interface within the viewmodel
        DetailsView.prototype.activate = function () {
            this.title('My title');
            m_logger.logger.log('Details View Activated', null, 'details', true);
            if (this.countries().length == 0) {
                this.countries.push({ id: 'IS', name: ko.observable('Iceland'), toolTip: ko.observable('Land of ice and fire') });
            }
            this.activateToolTips();

            //Note: remember that when waiting for data i.e. from service query, the promise should be returned instead of the "true" value
            return true;
        };
        DetailsView.prototype.viewAttached = function (view) {
            this.activateToolTips();
        };
        return DetailsView;
    })();
    exports.DetailsView = DetailsView;

    //Export oru viewmodel to the DOM as vm
    exports.vm = new DetailsView();

    //The Durandal plugin-interface
    exports.activate = function () {
        return exports.vm.activate();
    };

    //Note that in previous version of Durandal attached() was named viewAttached()
    exports.attached = function (view) {
        exports.vm.viewAttached(view);
    };

    //Finally some timeout update to the countries to demonstrate knockout capabilities on updating observable data
    setTimeout(function () {
        exports.vm.countries.push({ id: 'GB', name: ko.observable('Great Britain'), toolTip: ko.observable('Home of Soccer') });
        exports.vm.countries.push({ id: 'US', name: ko.observable('United states'), toolTip: ko.observable('Hmm?') });
        exports.vm.activateToolTips();
    }, 5000);
});
//# sourceMappingURL=details.js.map

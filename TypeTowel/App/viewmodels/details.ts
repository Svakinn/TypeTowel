/// <reference path="../../Scripts/typings/bootstrap/bootstrap.d.ts" />

import m_logger = require('services/logger');
import m_system = require('durandal/system');

export interface ICountry {
    id: string;
    name: KnockoutObservable<string>;
    toolTip: KnockoutObservable<string>;
}

//The typescript viewmodel class
export class DetailsView {
    constructor() {
        //Note that computeds and subscriptions should be initialized in constructor or activate function in typescript viewmodel class
        this.compTitle = ko.computed(function () {
            return this.title() + ' (computed)';
        }, this);
    }

    public title: KnockoutObservable<string> = ko.observable('');
    public countries: KnockoutObservableArray<ICountry> = ko.observableArray<ICountry>();
    public compTitle: KnockoutComputed<string>; //See the constructor above

    //Remember to include the viewmodel as the first parameter of the knockout binding to have it function as a member function of the class
    //See the details.html
    public clickUpdatTitle(newTitle: string) {
        this.title(newTitle);
    }

    public activateToolTips() {
        //Bootstrap tooltips must be initialized after html elements have been rendered on page
        //(after knockout bindings have been applied)
        $('.toolTip').tooltip();
    }

    //Implementation of Durandal interface within the viewmodel
    public activate() {
        this.title('My title');
        m_logger.logger.log('Details View Activated', null, 'details', true);
        if (this.countries().length == 0) {
            this.countries.push({ id: 'IS', name: ko.observable('Iceland'), toolTip: ko.observable('Land of ice and fire') });
        }
        this.activateToolTips();
        //Note: remember that when waiting for data i.e. from service query, the promise should be returned instead of the "true" value
        return true;
    }
    public viewAttached(view) {
        this.activateToolTips();
    }
}
//Export oru viewmodel to the DOM as vm
export var vm = new DetailsView();

//The Durandal plugin-interface
export var activate = function () { return vm.activate(); };
//Note that in previous version of Durandal attached() was named viewAttached()
export var attached = function (view) { vm.viewAttached(view); }

//Finally some timeout update to the countries to demonstrate knockout capabilities on updating observable data
setTimeout(function () {
    vm.countries.push({ id: 'GB', name: ko.observable('Great Britain'), toolTip: ko.observable('Home of Soccer') });
    vm.countries.push({ id: 'US', name: ko.observable('United states'), toolTip: ko.observable('Hmm?') });
    vm.activateToolTips();
}, 5000);
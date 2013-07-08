/// <reference path="../../Scripts/typings/knockout/knockout.d.ts" />

import _logger = module('services/logger');
import _system = module('durandal/system');


//The typescript viewmodel class
export class DetailsView { 
    
    public title: KnockoutObservable<string> = ko.observable('');
    public countries: KnockoutObservableArray<any> = ko.observableArray([]);

    //public var DispName = 'new details view';
    public activate() {
        this.title('My title');
        _logger.logger.log('Details View Activated', null, 'details', true);
        vm.countries.push({ id: 'IS', name: 'Iceland' });
        return true;
    }

    //Remember to include the viewmodel as the first parameter of the knockout binding to have it function as a member function of the class
    //See the details.html
    public clickUpdatTitle(newTitle: string) {
        this.title(newTitle);
    }
}
//Export oru viewmodel to the DOM as vm
export var vm = new DetailsView();

//The Durandal plugin-interface
//Note that it must be placed below the viewmodel class if the class is in the same file
export var displayName = vm.title();
export var title = vm.title();
export var activate = _activate;

function _activate() {
    return vm.activate();
}

//Finally some timeout update to the countries to demonstrate knockout capabilities on updating observable data
setTimeout(function () {
    vm.countries.push({ id: 'GB', name: 'Great Britain' });
    vm.countries.push({ id: 'US', name: 'United states' });
}, 5000);
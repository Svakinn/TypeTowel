/// <reference path="../../Scripts/typings/knockout/knockout.d.ts" />
import _logger = require('services/logger');
 
export class ViewModel { 
    title: string =  'Home View';
    public activate() {
        _logger.logger.log('We are home now', null, 'home', true);
        return true;
    }
}
export var vm = new ViewModel();

//The Durandal plugin-interface variables
export var activate = function () { return vm.activate(); };


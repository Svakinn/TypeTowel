import m_logger = require('services/logger');

export class ViewModel {
    title: string = 'Home View'; 
    public activate() {
        m_logger.logger.log('We are at home now', null, 'home', true);
        return true;
    }
}
export var vm = new ViewModel();

//The Durandal plugin-interface variables
export var activate = function () { return vm.activate(); };
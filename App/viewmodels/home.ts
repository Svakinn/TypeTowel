import _logger = module('services/logger');

export class ViewModel {
    public title() { return 'Home View'; }
    MyTitle: string; //MyTitle can be referenced in home.html as vm.MyTitle
    public activate() {
        this.MyTitle = this.title()+' with my title';
        _logger.logger.log('We are home now', null, 'home', true);
        return true;
    }
}
export var vm = new ViewModel();

//The Durandal plugin-interface variables
export var title = vm.title();
export var activate = function () { return vm.activate(); };


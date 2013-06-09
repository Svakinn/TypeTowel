import _logger = module('services/logger');
import _system = module('durandal/system');

//In case we want to implement typescript-class for our viewmodel we can do that:
export class DetailsView {
    public title() {
        return 'My Details View Title';
    }

    //public var DispName = 'new details view';
    public activate() {
        _logger.logger.log('Details View Activated', null, 'details', true);
        return true;
    }
}
//Then we can dispose the class and also reference it in the durandal interface variables:
export var vm = new DetailsView();

//The Durandal plugin-interface
//Note that it must be placed below the viewmodel class if the class is in the same file
export var displayName = vm.title();
export var title = vm.title();
export var activate = _activate;

function _activate() {
    return vm.activate();
}


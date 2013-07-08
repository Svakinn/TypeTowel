/// <reference path="../../Scripts/typings/toastr/toastr.d.ts" />
/// <reference path="../../Scripts/typings/durandal/durandal.d.ts" />

import _system = module('durandal/system');
export class loggerClass {

    public log(message: string, data: Object, source: string, showToast: bool) {
        this.logIt(message, data, source, showToast, 'info');
    }

    public logError(message: string, data: Object, source: string, showToast: bool) {
        this.logIt(message, data, source, showToast, 'error');
    }

    private logIt(message: string, data: Object, source: string, showToast: bool, toastType: string) {
        source = source ? '[' + source + '] ' : '';
        if (data) {
            _system.log(source, message, data);
        } else {
            _system.log(source, message);
        }
        if (showToast) {
            if (toastType === 'error') {
                toastr.error(message);
            } else {
                toastr.info(message);
            }
        }
    }
}

export var logger = new loggerClass();


define(["require", "exports", 'durandal/system'], function(require, exports, ___system__) {
    var _system = ___system__;
    var loggerClass = (function () {
        function loggerClass() {
        }
        loggerClass.prototype.log = function (message, data, source, showToast) {
            this.logIt(message, data, source, showToast, 'info');
        };

        loggerClass.prototype.logError = function (message, data, source, showToast) {
            this.logIt(message, data, source, showToast, 'error');
        };

        loggerClass.prototype.logIt = function (message, data, source, showToast, toastType) {
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
        };
        return loggerClass;
    })();
    exports.loggerClass = loggerClass;

    exports.logger = new loggerClass();
});
//@ sourceMappingURL=logger.js.map

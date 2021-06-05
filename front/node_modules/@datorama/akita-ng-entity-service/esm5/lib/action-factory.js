export function successAction(storeName, notifier) {
    return function (_a) {
        var payload = _a.payload, method = _a.method, successMsg = _a.successMsg;
        notifier.dispatch({
            type: 'success',
            storeName: storeName,
            payload: payload,
            method: method,
            successMsg: successMsg
        });
    };
}
export function errorAction(storeName, notifier) {
    return function (_a) {
        var payload = _a.payload, method = _a.method, errorMsg = _a.errorMsg;
        notifier.dispatch({
            type: 'error',
            storeName: storeName,
            payload: payload,
            method: method,
            errorMsg: errorMsg
        });
    };
}
//# sourceMappingURL=action-factory.js.map
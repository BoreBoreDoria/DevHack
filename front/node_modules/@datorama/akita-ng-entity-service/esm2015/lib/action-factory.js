export function successAction(storeName, notifier) {
    return function ({ payload, method, successMsg }) {
        notifier.dispatch({
            type: 'success',
            storeName,
            payload,
            method,
            successMsg
        });
    };
}
export function errorAction(storeName, notifier) {
    return function ({ payload, method, errorMsg }) {
        notifier.dispatch({
            type: 'error',
            storeName,
            payload,
            method,
            errorMsg
        });
    };
}
//# sourceMappingURL=action-factory.js.map
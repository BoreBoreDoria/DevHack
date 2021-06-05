import { isNumber, isString } from '@datorama/akita';
export function isID(idOrConfig) {
    return isNumber(idOrConfig) || isString(idOrConfig);
}
//# sourceMappingURL=helpers.js.map
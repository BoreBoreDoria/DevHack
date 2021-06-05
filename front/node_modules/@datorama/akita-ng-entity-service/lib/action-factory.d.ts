import { EntityServiceAction, NgEntityServiceNotifier } from './ng-entity-service-notifier';
export declare function successAction(storeName: string, notifier: NgEntityServiceNotifier): (params: Partial<EntityServiceAction>) => void;
export declare function errorAction(storeName: string, notifier: NgEntityServiceNotifier): (params: Partial<EntityServiceAction>) => void;

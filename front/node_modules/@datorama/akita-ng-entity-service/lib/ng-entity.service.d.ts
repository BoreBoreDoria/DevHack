import { HttpClient } from '@angular/common/http';
import { EntityService, EntityState, EntityStore, getEntityType, getIDType } from '@datorama/akita';
import { Observable } from 'rxjs';
import { HttpMethod } from './ng-entity-service-notifier';
import { NgEntityServiceGlobalConfig } from './ng-entity-service.config';
import { NgEntityServiceLoader } from './ng-entity-service.loader';
import { HttpAddConfig, HttpConfig, HttpDeleteConfig, HttpGetConfig, HttpUpdateConfig, NgEntityServiceParams } from './types';
export declare const mapResponse: <T>(config?: HttpConfig<T>) => import("rxjs").OperatorFunction<unknown, unknown>;
export declare class NgEntityService<S extends EntityState = any> extends EntityService<S> {
    protected readonly store: EntityStore<S>;
    readonly config: NgEntityServiceParams;
    baseUrl: string | undefined;
    loader: NgEntityServiceLoader;
    private readonly http;
    private readonly notifier;
    private readonly mergedConfig;
    private readonly httpMethodMap;
    private readonly dispatchSuccess;
    private readonly dispatchError;
    constructor(store: EntityStore<S>, config?: NgEntityServiceParams);
    get api(): string;
    get resourceName(): string;
    setBaseUrl(baseUrl: string): void;
    getHttp(): HttpClient;
    getConfig(): NgEntityServiceParams & NgEntityServiceGlobalConfig;
    /**
     * Get one entity - Creates a GET request
     *
     * @example
     * service.get(id).subscribe()
     * service.get(id, { headers, params, url }).subscribe()
     */
    get<T>(id?: getIDType<S>, config?: HttpGetConfig<T>): Observable<T>;
    /**
     * Get all entities - Creates a GET request
     *
     * @example
     * service.get().subscribe()
     * service.get({ headers, params, url }).subscribe()
     */
    get<T>(config?: HttpGetConfig<T>): Observable<T>;
    /**
     * Add a new entity - Creates a POST request
     *
     * @example
     * service.add(entity).subscribe()
     * service.add(entity, config).subscribe()
     */
    add<T>(entity: getEntityType<S>, config?: HttpAddConfig<T>): Observable<T>;
    /**
     * Update an entity - Creates a PUT/PATCH request
     *
     * @example
     * service.update(id, entity).subscribe()
     * service.update(id, entity, config).subscribe()
     */
    update<T>(id: getIDType<S>, entity: Partial<getEntityType<S>>, config?: HttpUpdateConfig<T>): Observable<T>;
    /**
     * Delete an entity - Creates a DELETE request
     *
     * @example
     * service.delete(id).subscribe()
     * service.delete(id, config).subscribe()
     */
    delete<T>(id: getIDType<S>, config?: HttpDeleteConfig<T>): Observable<T>;
    /**
     * Gets the mapped HttpMethod.
     *
     * The default HttpMethod can be changed like so:
     * ```ts
     * {
     *   provide: NG_ENTITY_SERVICE_CONFIG,
     *   useValue: {
     *     httpMethods: {
     *       PUT: HttpMethod.PATCH,
     *     },
     *   } as NgEntityServiceGlobalConfig,
     * }
     * ```
     *
     * @param type HttpMethod to get the user configured HttpMethod for
     * @returns User configured HttpMethod for the method, else the default HttpMethod
     */
    protected getHttpMethod(type: HttpMethod): HttpMethod;
    /**
     * Gets the value given via the NgEntityServiceConfig decorator
     *
     * ```ts
     * @NgEntityServiceConfig({
     *   baseUrl: 'foo',
     *   resourceName: 'bar',
     * })
     * ```
     *
     * @param key The property key
     * @returns The value of the given decorator key
     */
    private getDecoratorValue;
    protected getDecoratorConfig(): NgEntityServiceParams;
    protected resolveUrl(config?: HttpConfig, id?: any): string;
    protected handleError(method: HttpMethod, error: any, errorMsg?: string): Observable<never>;
}

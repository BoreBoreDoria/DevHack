import { Injectable } from '@angular/core';
import {  Query } from '@datorama/akita';
import {AppState, AppStore} from "./app.store";

@Injectable({ providedIn: 'root' })
export class AppQuery extends Query<AppState> {
  get history$() {
    return this.select('history');
  }

  get flows$() {
    return this.select('flows');
  }

  get clientInfo$() {
    return this.select('clientInfo');
  }

  constructor(protected store: AppStore) {
    super(store);
  }
}

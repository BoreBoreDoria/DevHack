import { Injectable } from '@angular/core';
import {  Query } from '@datorama/akita';
import {FlowState, FlowStore} from "./flow.store";

@Injectable({ providedIn: 'root' })
export class FlowQuery extends Query<FlowState> {
  get flow$() {
    return this.select('flow');
  }

  constructor(protected store: FlowStore) {
    super(store);
  }
}

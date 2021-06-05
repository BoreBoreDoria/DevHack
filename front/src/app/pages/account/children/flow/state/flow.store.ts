import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import {Flow} from "../../../../../models/flow";

export interface FlowState {
  flow: Flow;
}

export function createInitialState(): FlowState {
  return {
    flow: null
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'app', resettable: true })
export class FlowStore extends Store<FlowState> {
  constructor() {
    super(createInitialState());
  }
}

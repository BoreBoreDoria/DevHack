import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import {HistoryEvent} from "../models/history";
import {Flow, FlowNameTypes} from "../models/flow";
import {Client} from "../models/client";

export interface AppState {
  flows: FlowNameTypes[];
  history: HistoryEvent[];
  clientInfo: Client;
}

export function createInitialState(): AppState {
  return {
    flows: [],
    history: [],
    clientInfo: null
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'app', resettable: true })
export class AppStore extends Store<AppState> {
  constructor() {
    super(createInitialState());
  }
}

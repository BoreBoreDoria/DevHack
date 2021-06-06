import { Injectable } from '@angular/core';
import {defaultIfEmpty, take} from "rxjs/operators";
import {AppStore} from "./state/app.store";
import {HttpClient} from "@angular/common/http";
import {of} from "rxjs";
import {HistoryEventStatuses, HistoryEventTypes} from "./models/history";
import {AppQuery} from "./state/app.query";
import {FlowNameStatuses, FlowNameTypes, FlowTextTypes, FlowWidgetTypes} from "./models/flow";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  isMockData = false;

  get history$() {
    return this.appQuery.history$;
  }

  get flows$() {
    return this.appQuery.flows$;
  }

  get clientInfo$() {
    return this.appQuery.clientInfo$;
  }

  constructor(private appStore: AppStore, private appQuery: AppQuery, private http: HttpClient) { }

  initData() {
    this.initHistory();
    this.initFlows();
    this.initClientInfo();
  }

  async initClientInfo() {
    const clientInfo = (await this.fetchClientInfo(3)
      .pipe(take(1))
      .toPromise()) as any;
    this.appStore.update({
      clientInfo
    });
  }

  async initHistory() {
    const history = (await this.fetchHistory()
      .pipe(take(1))
      .toPromise()) as any;
    this.appStore.update({
      history
    });
  }

  async initFlows() {
    const flows = (await this.fetchFlows()
      .pipe(take(1))
      .toPromise()) as any;
    this.appStore.update({
      flows
    });
  }

  // FETCHERS

  fetchHistory() {
    // return this.http.post(``, {});
    return of([
      {
        date: 'Today',
        state: HistoryEventStatuses.Success,
        type: HistoryEventTypes.Income,
        title: 'Income operation',
        value: '100$'
      }
    ]);
  }

  fetchFlows() {

    return of([FlowNameTypes.CreateCurrency]);
  }

  fetchClientInfo(id) {
    return this.isMockData ? of({
      clientId: 3,
      firstName: "Andrei",
      lastName: "Serbin",
      middleName: "Alekseevitch",
      email: "test@mail.ru",
      role: "VIP",
      config: {
        getHistory: true,
        createSwiftFlow: true,
        createCurrencyFlow: true,
        createNsjFlow: true
      }
    }) : this.http.get(`http://localhost:8080/client/${id}`, {});
  }
}

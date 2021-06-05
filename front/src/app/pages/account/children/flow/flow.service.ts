import { Injectable } from '@angular/core';
import {FlowStore} from "./state/flow.store";
import {FlowQuery} from "./state/flow.query";
import {HttpClient} from "@angular/common/http";
import {Flow, FlowNameStatuses, FlowNameTypes, FlowTextTypes, FlowWidgetTypes} from "../../../../models/flow";
import {take, tap} from "rxjs/operators";
import {BehaviorSubject, of} from "rxjs";
import {AppService} from "../../../../app.service";

@Injectable({
  providedIn: 'root'
})
export class FlowService {

  steps$ = new BehaviorSubject([]);

  get flow$() {
    return this.flowQuery.flow$;
  }

  constructor(private flowStore: FlowStore,
              private flowQuery: FlowQuery,
              private http: HttpClient,
              private appService: AppService
              ) { }

  async initFlow(flowName: FlowNameTypes, clientId?, value?, step?: 'start' | number | 'end') {
    if (step === 'start') {
      const flow = (await this.startFlow({
        flowName,
        clientId
      })
        .pipe(take(1))
        .toPromise()) as any;

      this.flowStore.update({
        flow
      });
    } else if (typeof step === "number") {
      const flow = (await this.stepFlow({
        flowName,
        step,
        value
      })
        .pipe(take(1))
        .toPromise()) as any;

      this.flowStore.update({
        flow
      });
    } else if (step === 'end') {
      const flow = (await this.createOrder({
        flowName,
        valueList: value
      })
        .pipe(take(1))
        .toPromise()) as any;

      this.flowStore.update({
        flow
      });
    }
  }

  startFlow(data: {
    clientId: number,
    flowName: string
  }) {
    return this.appService.isMockData ? of({
      flowName: FlowNameTypes.CreateCurrency,
      status: FlowNameStatuses.Success,
      errorMessage: null,
      data: {
        section: {
          title: '1 шаг: Выберите валюту',
          textInfo: {
            textType: FlowTextTypes.Info,
            text: 'Выберите валюту'
          }
        },
        widget: {
          widgetType: FlowWidgetTypes.List,
          widgetBody: {
            text: ['RUB',
              'EUR',
              'USD'
            ],
            subText: [
              'Рубли',
              'Евро',
              'Доллары'
            ]
          }
        }
      }
    }).pipe(
      tap((flow: any) => {
        this.steps$.next([
          {
            title: flow.data.section.title,
            order: 0,
            value: null
          }
        ]);
      })
      ) :
      this.http.post('http://localhost:8080/flow/startFlow', data).pipe(
        tap((flow: any) => {
          this.steps$.next([
            {
              title: flow.data.section.title,
              order: 0,
              value: null
            }
          ]);
        })
      );
  }

  stepFlow(data: {
    flowName: FlowNameTypes;
    step: number;
    value: any;
  }) {
    let step;

    if (data.step === 1) {
      step = {
        flowName: 'createCurrencyFlow',
        status: FlowNameStatuses.Success,
        errorMessage: null,
        data: {
          section: {
            title: '2 шаг: Валюта покупки',
            textInfo: {
              textType: 'INFO',
              text: 'Введите покупаемую валюту'
            }
          },
          widget: {
            widgetType: FlowWidgetTypes.List,
            widgetBody: {
              text: ['RUB',
                'EUR',
                'USD'
              ],
              subText: [
                'Рубли',
                'Евро',
                'Доллары'
              ]
            }
          }
        }
      };
    } else if (data.step === 2) {
      step = {
        flowName: 'createCurrencyFlow',
        status: FlowNameStatuses.End,
        errorMessage: null,
        data: {
          section: {
            title: '3 шаг: Введите количество валюты',
            textInfo: {
              textType: 'INFO',
              text: 'Сколько валюты вы хотите купить'
            }
          },
          widget: {
            widgetType: FlowWidgetTypes.FloatNumber,
            widgetBody: {
              min: 1.0,
              max: 5000.0,
              text: 'Введите сумму от 1 до 5000',
              hint: 'Введите сумму',
              error: 'Вы должны ввести сумму от 1 до 5000'
            }
          }
        }
      };
    }

    return this.appService.isMockData ? of(step).pipe(
      tap((flow: any) => {
        this.steps$.next(this.steps$.getValue().concat([
          {
            title: flow.data.section.title,
            order: data.step,
            value: data.value
          }
        ]));
      })) : this.http.post('http://localhost:8080/flow/stepFlow', data).pipe(
      tap((flow: any) => {
        this.steps$.next(this.steps$.getValue().concat([
          {
            title: flow.data.section.title,
            order: data.step,
            value: data.value
          }
        ]));
      })
    );
  }

  createOrder(data: {
    flowName: FlowNameTypes;
    valueList: any[];
  }) {
    return this.appService.isMockData ? of({
      flowName: "flow",
      status: FlowNameStatuses.Order,
      errorMessage: null,
      data: {
        section: {
          title: "Заявка на покупку оформлена",
          textInfo: {
            textType: "INFO",
            text: "Заявка на покупку валюты оформлена. Вы можете просмотреть её статус в истории платежей"
          }
        },
        widget: null
      }
    }) : this.http.post('http://localhost:8080/flow/createOrder', data);
  }
}

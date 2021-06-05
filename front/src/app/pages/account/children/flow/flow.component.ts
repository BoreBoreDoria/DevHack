import {Component, OnInit} from "@angular/core";
import {FlowService} from "./flow.service";
import {RouterQuery} from "@datorama/akita-ng-router-store";
import {map, tap} from "rxjs/operators";
import {AppService} from "../../../../app.service";
import {BehaviorSubject, combineLatest} from "rxjs";
import {Flow, FlowNameStatuses, FlowWidgetTypes} from "../../../../models/flow";
import {Router} from "@angular/router";

@Component({
  selector: 'app-flow',
  templateUrl: './flow.component.html',
  styleUrls: ['./flow.component.scss']
})
export class FlowComponent implements OnInit {

  flowWidgetTypes = FlowWidgetTypes;
  flowNameStatuses = FlowNameStatuses;

  flow$ = this.flowService.flow$;

  flowName$ = combineLatest([this.routerQuery.selectParams('flowId'),
    this.appService.clientInfo$]).pipe(
      map(([flowId, cliendInfo]) => {
        this.flowService.initFlow(flowId, cliendInfo.clientId, null, 'start');
      })
  );

  steps$ = this.flowService.steps$;

  sliderValue = 0;

  selectedCurrency$ = new BehaviorSubject('');

  constructor(private flowService: FlowService,
              private routerQuery: RouterQuery,
              private appService: AppService,
              private router: Router
              ) {
  }
  ngOnInit() {
  }

  nextStepHandler(flow: Flow, step, value, status) {
    if (status !== FlowNameStatuses.End && status !== FlowNameStatuses.Order) {
      this.flowService.initFlow(flow.flowName, null, value, step);
    } else if (status === FlowNameStatuses.End) {
      this.steps$.next(this.steps$.getValue().concat({
        title: flow.data.section.textInfo.text,
        order: step,
        value
      }));
      this.flowService.initFlow(flow.flowName, null, this.flowService.steps$.getValue().map(s => {
        return {
          paramName: s.title,
          value: s.value
        };
      }), 'end'
      );
    } else if (status === FlowNameStatuses.Order) {
      this.router.navigate(['../../']);
    }

    this.selectedCurrency$.next('');
  }

  filterSteps(stepsList) {
    return stepsList.filter(v => !!v.value).map((step, i) => {
      if (i === 0) {
        return {
          ...step,
          title: '1 шаг: Выберите валюту'
        };
      } else if (i === 1) {
        return {
          ...step,
          title: '2 шаг: Валюта покупки'
        };
      } else if (i === 2) {
        return {
          ...step,
          title: '3 шаг: Введите количество валюты'
        };
      }
    });
  }
}

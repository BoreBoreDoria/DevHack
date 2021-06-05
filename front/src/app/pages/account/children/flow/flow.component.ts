import {Component, OnInit} from "@angular/core";
import {FlowService} from "./flow.service";
import {RouterQuery} from "@datorama/akita-ng-router-store";
import {map, tap} from "rxjs/operators";
import {AppService} from "../../../../app.service";
import {BehaviorSubject, combineLatest} from "rxjs";
import {Flow, FlowWidgetTypes} from "../../../../models/flow";

@Component({
  selector: 'app-flow',
  templateUrl: './flow.component.html',
  styleUrls: ['./flow.component.scss']
})
export class FlowComponent implements OnInit {

  flowWidgetTypes = FlowWidgetTypes;

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
              private appService: AppService) {
  }
  ngOnInit() {
  }

  nextStepHandler(flow: Flow, step, value, status) {
    if (status !== 'ORDER') {
      this.flowService.initFlow(flow.flowName, null, value, step);
    } else {
      //
    }
  }

  getValueByType(widgetType, sliderValue: any, dropdownValue: any) {
    if (widgetType === FlowWidgetTypes.List) {
      return dropdownValue;
    } else if (widgetType === FlowWidgetTypes.FloatNumber) {
      return sliderValue;
    }
  }
}

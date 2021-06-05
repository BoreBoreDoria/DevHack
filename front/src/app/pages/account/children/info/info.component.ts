import { Component, OnInit } from '@angular/core';
import {AppService} from "../../../../app.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FlowService} from "../flow/flow.service";
import {FlowNameTypes} from "../../../../models/flow";

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  activeTab = 'History';

  tabs = [
    'Info',
    'History'
  ];

  flows$ = this.appService.flows$;
  clientInfo$ = this.appService.clientInfo$;

  constructor(private appService: AppService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private flowService: FlowService
  ) { }

  ngOnInit(): void {
  }

  repeatOperation(): void {
    //
  }

  goToFlow(flowName: FlowNameTypes) {
    // this.flowService.initFlow(flowName);
    this.router.navigate(['../', flowName], {
      relativeTo: this.activatedRoute.parent
    });
  }
}

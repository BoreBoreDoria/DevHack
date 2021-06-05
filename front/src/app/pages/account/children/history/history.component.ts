import { Component, OnInit } from '@angular/core';
import {AppService} from "../../../../app.service";

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  history$ = this.appService.history$;

  constructor(private appService: AppService) { }

  ngOnInit(): void {
  }

}

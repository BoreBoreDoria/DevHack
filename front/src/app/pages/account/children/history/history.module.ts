import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HistoryComponent} from "./history.component";
import {HistoryRoutingModule} from "./history-routing.module";
import {HistoryCardComponent} from "./components/history-card/history-card.component";
import {NgxfModule} from "@ngxf/platform";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzButtonModule} from "ng-zorro-antd/button";



@NgModule({
  declarations: [HistoryComponent, HistoryCardComponent],
  imports: [
    CommonModule,
    HistoryRoutingModule,
    NgxfModule,
    NzIconModule,
    NzButtonModule
  ]
})
export class HistoryModule { }

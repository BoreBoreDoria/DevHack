import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InfoRoutingModule} from "./info-routing.module";
import {InfoComponent} from "./info.component";
import {NzAvatarModule} from "ng-zorro-antd/avatar";
import { FlowCardComponent } from './components/flow-card/flow-card.component';
import {NzIconModule} from "ng-zorro-antd/icon";



@NgModule({
  declarations: [InfoComponent, FlowCardComponent],
  imports: [
    CommonModule,
    InfoRoutingModule,
    NzAvatarModule,
    NzIconModule
  ]
})
export class InfoModule { }

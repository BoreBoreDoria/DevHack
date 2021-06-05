import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {NzRadioModule} from "ng-zorro-antd/radio";
import {FormsModule} from "@angular/forms";
import {NzIconModule} from "ng-zorro-antd/icon";
import {FlowComponent} from "./flow.component";
import {FlowRoutingModule} from "./flow-routing.module";
import {NgxfModule} from "@ngxf/platform";
import {NzStepsModule} from "ng-zorro-antd/steps";
import {NzDropDownModule} from "ng-zorro-antd/dropdown";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzSliderModule} from "ng-zorro-antd/slider";
import {NzInputNumberModule} from "ng-zorro-antd/input-number";

@NgModule({
  declarations: [FlowComponent],
  imports: [
    CommonModule,
    FlowRoutingModule,
    NzRadioModule,
    FormsModule,
    NzIconModule,
    NgxfModule,
    NzStepsModule,
    NzDropDownModule,
    NzButtonModule,
    NzFormModule,
    NzSliderModule,
    NzInputNumberModule
  ]
})
export class FlowModule { }

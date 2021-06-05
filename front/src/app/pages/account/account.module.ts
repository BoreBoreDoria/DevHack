import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AccountComponent} from "./account.component";
import {NzFormModule} from "ng-zorro-antd/form";
import {NzInputModule} from "ng-zorro-antd/input";
import {ReactiveFormsModule} from "@angular/forms";
import {NzCheckboxModule} from "ng-zorro-antd/checkbox";
import {AccountRoutingModule} from "./account-routing.module";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzRadioButtonDirective, NzRadioGroupComponent} from "ng-zorro-antd/radio";



@NgModule({
  declarations: [AccountComponent],
  imports: [
    CommonModule,
    NzFormModule,
    NzInputModule,
    ReactiveFormsModule,
    NzCheckboxModule,
    NzButtonModule,
    NzRadioGroupComponent,
    NzRadioButtonDirective,
    AccountRoutingModule
  ]
})
export class AccountModule { }

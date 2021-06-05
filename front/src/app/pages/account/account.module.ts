import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AccountComponent} from "./account.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AccountRoutingModule} from "./account-routing.module";
import {NzRadioModule} from "ng-zorro-antd/radio";



@NgModule({
  declarations: [AccountComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    NzRadioModule,
    FormsModule
  ]
})
export class AccountModule { }

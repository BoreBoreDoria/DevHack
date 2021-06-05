import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AccountComponent} from "./account.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AccountRoutingModule} from "./account-routing.module";
import {NzRadioModule} from "ng-zorro-antd/radio";
import {NzIconModule} from "ng-zorro-antd/icon";

@NgModule({
  declarations: [AccountComponent],
    imports: [
        CommonModule,
        AccountRoutingModule,
        NzRadioModule,
        FormsModule,
        NzIconModule
    ]
})
export class AccountModule { }

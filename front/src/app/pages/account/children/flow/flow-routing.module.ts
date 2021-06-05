import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {FlowComponent} from "./flow.component";

const routes: Routes = [
  {
    path: '',
    component: FlowComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlowRoutingModule {}

import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {AccountComponent} from "./account.component";

const childRoutes: Routes = [
  { path: '', redirectTo: 'info', pathMatch: 'full' },
  {
    path: 'info',
    loadChildren: () =>
      import('./children/info/info.module').then(
        (m) => m.InfoModule
      ),
  },
  {
    path: 'history',
    loadChildren: () =>
      import('./children/history/history.module').then((m) => m.HistoryModule),
  },
];

const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
    children: childRoutes
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./children/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: ':flowId',
    loadChildren: () =>
      import('./children/flow/flow.module').then((m) => m.FlowModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountRoutingModule {}

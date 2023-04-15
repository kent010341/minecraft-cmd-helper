import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GiveCmdComponent } from './give-cmd/give-cmd.component';

const routes: Routes = [
  {
    path: '', children: [
      {path: '', redirectTo: '/give', pathMatch: 'full'},
      {path: 'give', component: GiveCmdComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

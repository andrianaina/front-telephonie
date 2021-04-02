import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CallhistorymanagerComponent } from './callhistorymanager/callhistorymanager.component';
import { LoginmanagerComponent } from './loginmanager/loginmanager.component';

const routes: Routes = [ {path:'', component: LoginmanagerComponent},
{path:'callhistory', component: CallhistorymanagerComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

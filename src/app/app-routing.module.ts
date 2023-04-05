import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FlightStatusComponent } from './flight-status/flight-status.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { FlightDetailsComponent } from './flight-details/flight-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'flight-status', component: FlightStatusComponent, canActivate: [AuthGuard] },
  { path: 'flight-details', component: FlightDetailsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

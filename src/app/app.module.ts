import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FlightStatusComponent } from './flight-status/flight-status.component';
import { AuthGuard } from './auth.guard';
import { LoginService } from './login.service';
import { FlightStatusReturnDataComponent } from './flight-status-return-data/flight-status-return-data.component';
import { FlightDetailsComponent } from './flight-details/flight-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FlightStatusComponent,
    FlightStatusReturnDataComponent,
    FlightDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AuthGuard, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }

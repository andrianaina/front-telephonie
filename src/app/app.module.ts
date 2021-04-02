import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginmanagerComponent } from './loginmanager/loginmanager.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { LoginComponent } from './login/login.component';
import {MatCardModule} from '@angular/material/card';
import { RegistrationComponent } from './registration/registration.component';
import { NavbarcontentComponent } from './navbarcontent/navbarcontent.component';
import {MatIconModule} from '@angular/material/icon';
import { CallhistorymanagerComponent } from './callhistorymanager/callhistorymanager.component';
import { CallhistoryComponent } from './callhistory/callhistory.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginmanagerComponent,
    LoginComponent,
    RegistrationComponent,
    NavbarcontentComponent,
    CallhistorymanagerComponent,
    CallhistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

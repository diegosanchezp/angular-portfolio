import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent, DialogContent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatSidenavModule} from '@angular/material/sidenav'; 
import {MatButtonModule} from '@angular/material/button'; 
import {LayoutModule} from '@angular/cdk/layout'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatListModule} from '@angular/material/list'; 
import {MatRippleModule} from '@angular/material/core'; 
import {MatDialogModule} from '@angular/material/dialog';
import { AboutComponent } from './pages/about/about.component';
import { AcademicsComponent } from './pages/academics/academics.component';
import { CertificationsComponent } from './pages/certifications/certifications.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component'; 

@NgModule({
  declarations: [
    AppComponent,
    DialogContent,
    AboutComponent,
    AcademicsComponent,
    CertificationsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    LayoutModule,
    MatListModule,
    MatRippleModule,
    FontAwesomeModule,
    MatDialogModule,
  ],
  providers: [
    Title,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

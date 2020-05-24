import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProjectsComponent, ProjectCard} from './projects.component'
import {Title} from '@angular/platform-browser';

import {MatChipsModule} from '@angular/material/chips'; 
import {MatCardModule} from '@angular/material/card'; 
import {MatRippleModule} from '@angular/material/core'; 
import {ProjectsPageRoutingModule} from './projects-routing.module'


import { AngularFireAnalyticsModule, ScreenTrackingService } from '@angular/fire/analytics';
@NgModule({
  declarations: [
    ProjectsComponent,
    ProjectCard
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatChipsModule,
    MatRippleModule,
    ProjectsPageRoutingModule,
    AngularFireAnalyticsModule,
  ],
  exports: [
    ProjectsComponent
  ],
  providers: [
    Title,
    ScreenTrackingService
  ]
})
export class ProjectsModule { }

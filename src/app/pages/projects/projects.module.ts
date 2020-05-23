import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProjectsComponent, ProjectCard} from './projects.component'
import {Title} from '@angular/platform-browser';

import {MatChipsModule} from '@angular/material/chips'; 
import {MatCardModule} from '@angular/material/card'; 
import {MatRippleModule} from '@angular/material/core'; 
import {ProjectsPageRoutingModule} from './projects-routing.module'

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
  ],
  exports: [
    ProjectsComponent
  ],
  providers: [
    Title
  ]
})
export class ProjectsModule { }

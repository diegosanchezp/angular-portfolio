import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProjectsComponent, ProjectCard} from './projects.component'
import {Title} from '@angular/platform-browser';

import {MatChipsModule} from '@angular/material/chips'; 
import {MatCardModule} from '@angular/material/card'; 
import {MatRippleModule} from '@angular/material/core'; 


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
  ],
  exports: [
    ProjectsComponent
  ],
  providers: [
    Title
  ]
})
export class ProjectsModule { }

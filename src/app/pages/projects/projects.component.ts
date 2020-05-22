import { Component, OnInit, Input } from '@angular/core';
import {FELprojects, WorkProjects} from './projects';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor(
    private titleService: Title,
  ) { }
  FELprojects = FELprojects;
  WorkProjects = WorkProjects;
  ngOnInit(): void {
    this.titleService.setTitle('Projects | Diego Sánchez');
  }

}

@Component({
  selector: 'project-card',
  template: `
  <style>
    a img{
      margint-top: 0 !important;
    }
    
  </style>
  <mat-card class="project-card">
    <mat-card-header>
      <mat-card-title>{{project.title}}</mat-card-title>
    </mat-card-header>
    <a 
      [href]="project.url" title="See {{project.title}}" target="_blank" >
      <img 
        mat-card-image style="margin-top: 0"
        src="../../../assets/Images/{{project.img}}" 
        alt="{{project.title}}">
    </a>
    <mat-card-content>
      <p>
        {{project.description}}
      </p>
      <mat-chip-list aria-label="Project technologies" title="Project technologies">
        <mat-chip *ngFor="let tag of project.tags">{{tag}}</mat-chip>
      </mat-chip-list>
    </mat-card-content>
  </mat-card>
  `
})
export class ProjectCard{
  @Input() project = {
    title: '',
    url: '',
    img: '',
    description: '',
    tags: []
  };
}
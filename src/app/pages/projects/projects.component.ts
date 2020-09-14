import { Component, OnInit, Input } from '@angular/core';
import {FELprojects, WorkProjects, project} from './projects';
import { Title, Meta } from '@angular/platform-browser';
import {IndexedDBService} from '../../services/indexed-db.service';
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private indexedDB: IndexedDBService,
  ) { }
  FELprojects = FELprojects;
  WorkProjects = WorkProjects;
  async ngOnInit() {
    this.titleService.setTitle('Projects | Diego Sánchez');
    this.metaService.updateTag(
      {
        name: 'description', 
        content: 'Web development projects done by Diego Sánchez'
      }
    );
    const projects = await this.indexedDB.getProjects();
    console.log(projects);
  }

}

@Component({
  selector: 'project-card',
  template: `
  <style>
    a img{
      margint-top: 0 !important;
    }
    .project-card{
      background-color: #121212;
      box-shadow: 0px 0px 1px;
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
  @Input() project: project = {
    title: '',
    url: '',
    img: '',
    description: '',
    tags: []
  };
}

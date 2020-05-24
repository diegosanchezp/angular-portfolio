import { Component, OnInit } from '@angular/core';

import { Title, Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-academics',
  templateUrl: './academics.component.html',
  styleUrls: ['./academics.component.scss']
})
export class AcademicsComponent implements OnInit {

  constructor(
    private titleService: Title,
    private metaService: Meta,
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('Academics | Diego Sánchez');
    this.metaService.updateTag(
      {name: 'description', content: 'Diego Sánchez academic profile'}
    );
  }

}

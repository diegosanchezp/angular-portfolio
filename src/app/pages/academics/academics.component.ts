import { Component, OnInit } from '@angular/core';

import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-academics',
  templateUrl: './academics.component.html',
  styleUrls: ['./academics.component.scss']
})
export class AcademicsComponent implements OnInit {

  constructor(
    private titleService: Title,
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('Academics | Diego Sánchez');
  }

}

import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import {MatDialog} from '@angular/material/dialog';
import {DialogContent} from '../../app.component';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(
    private titleService: Title,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.titleService.setTitle('About | Diego Sánchez');
  }

  openDialog() {
    this.dialog.open(DialogContent);
  }

}

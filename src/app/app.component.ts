import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

import {BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { faLinkedin, faGithubSquare} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private breakpointObserver: BreakpointObserver,
    public dialog: MatDialog,
    ){
  }
  faEnvelope = faEnvelope
  icons = [
    {icon: faGithubSquare, title: 'Github Account', href: 'https://github.com/diegosanchezp/'},
    {icon: faLinkedin, title: 'LinkedIn Profile', href: 'https://www.linkedin.com/in/diego-s%C3%A1nchez-b0753b137/'}
  ]

  iconSize = '3x'
  drawerMode = 'side';
  subsObs: Subscription;

  openDialog() {
    const dialogRef = this.dialog.open(DialogContent);
  }

  ngOnInit(){
    this.subsObs = this.breakpointObserver.observe([
      Breakpoints.Tablet, Breakpoints.Medium, Breakpoints.XSmall
    ]).subscribe((media)=>{
      this.drawerMode = media.matches ? "over": "side"
    });
  }

  ngOnDestroy(){
    this.subsObs.unsubscribe();
  }
}

@Component({
  selector: 'dialog-content',
  template: `
    <style>
      div p{
        text-align: center;
      }
    </style>

    <div mat-dialog-content>
      <p>Send me an email at</p>
      <p><b>diegosandmg@gmail.com</b></p>
    </div>

    <div mat-dialog-actions align="end">
      <button color="accent" mat-raised-button mat-dialog-close>Ok</button>
    </div>
  `
})
export class DialogContent {}
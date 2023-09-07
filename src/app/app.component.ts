import { Component } from '@angular/core';
import {transition, trigger, useAnimation} from "@angular/animations";
import {bounce, shake} from "ng-animate";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    trigger('bounce', [transition(':increment', useAnimation(bounce))]),
    trigger('shake', [transition(':decrement', useAnimation(shake))])
  ]
})
export class AppComponent {

  mavariable = 0;
  shake= false;
  bounce = false;

  constructor() {
  }

  shakeMe() {
    this.shake = true;
    setTimeout(() => {this.shake = false;},1000);
  }

  bounceMe() {
    this.bounce = true;
    setTimeout(() => {this.bounce = false;},1000);
  }
}

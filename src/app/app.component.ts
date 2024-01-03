import { Component } from '@angular/core';
import {transition, trigger, useAnimation} from "@angular/animations";
import {bounce, shake} from "ng-animate";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    trigger('bounce', [transition(':increment', useAnimation(bounce, {
      // Set the duration to 3 seconds and delay to 1 second
      params: { timing: 3, delay: 0 }
    }))]),
    trigger('shake', [transition(':decrement', useAnimation(shake))]),
    trigger('shakeThenBounce', [transition(':increment', [useAnimation(shake, {params: { timing: 3 }}), useAnimation(bounce, {params: { timing: 3 }})])]),
  ]
})
export class AppComponent {

  mavariable = 0;
  autreVariable = 0;
  shake= false;
  bounce = false;

  constructor() {
  }

  shakeMe() {
    this.shake = true;
    setTimeout(() => {this.shake = false;},3000);
  }

  bounceMe() {
    this.bounce = true;
    setTimeout(() => {this.bounce = false;},3000);
  }

  shakeThenBounceMe() {
    this.shake = true;
    setTimeout(() => {this.shake = false; this.bounceMe()},3000);
  }

  shakeThenBounceMeLoop() {
    this.autreVariable++;
    setTimeout(() => {this.shakeThenBounceMeLoop()},6000);
  }
}

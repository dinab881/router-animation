import { Component, HostBinding, ViewChild } from '@angular/core';
import { fadeAnimation } from './animations/fade.animation';
import { secondAnimation } from './animations/second.animation';
import { thirdAnimation } from './animations/third.animation';
import { cubeAnimation } from './animations/cube.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [cubeAnimation]
})
export class AppComponent {
  title = 'app';

  constructor() { }

  public getRouterOutletState(outlet) {
    // console.log(outlet.activatedRoute);
    return outlet.isActivated ? outlet.activatedRoute : '';
  }
}

import { Component,ViewChild } from '@angular/core';
import { Scene } from './interfaces/scene.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  scenes: Scene = {
    world: {
      image: 'assets/1.jpg',
      hotspots: {
        green_area: {
          pitch: 10,
          yaw: -15,
          radius: 0.05,
          distance: 1
        },
      }
    },
    green_area: {
      image: 'assets/2.jpg',
      hotspots: {
        world: {
          pitch: 20,
          yaw: 0,
          radius: 0.05,
          distance: 1
        },
      }
    }
};

  constructor() {
  }
}

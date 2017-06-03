import { Component,ViewChild } from '@angular/core';
declare var VRView;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  scenes = {
    world: {
      image: 'assets/1.jpg',
      preview: 'assets/1.jpg',
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
      preview: 'assets/2.jpg',
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
  viewer: any;

  constructor() {

  }

  ngAfterViewInit() {
    this.viewer = new VRView.Player('#vrview', {
      image: 'assets/blank.png',
      width: '100%',
      height: 400
    });

    this.viewer.on('ready',() => {
      this.loadScene('world');

      this.viewer.on('click', (event) => this.loadScene(event.id));
    });
  }

  loadScene(id) {
    if (id) {
    // Set the image
    this.viewer.setContent({
      image: this.scenes[id].image,
      preview: this.scenes[id].preview,
    });
    // Add all the hotspots for the scene
    let newScene = this.scenes[id];
    let sceneHotspots = Object.keys(newScene.hotspots);
    for (let i = 0; i < sceneHotspots.length; i++) {
      let hotspotKey = sceneHotspots[i];
      let hotspot = newScene.hotspots[hotspotKey];

      this.viewer.addHotspot(hotspotKey, {
        pitch: hotspot.pitch,
        yaw: hotspot.yaw,
        radius: hotspot.radius,
        distance: hotspot.distance
        });
      }
    }
  }
}

import { Component, VERSION } from '@angular/core';
import { ImageapiService } from './imageapi.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  imageData: any;
  constructor(private imageapi: ImageapiService) {
    this.imageapi.getImage().subscribe((data) => {
      this.imageData = data;
      console.log('imageData =================', data);
    });
  }

  ngOnInit() {}
}

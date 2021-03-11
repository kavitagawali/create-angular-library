import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Title';
  subTitle = 'Subtitle';
  src = `./assets/images/comp.jpg`;
  imageHeight = `400px`;
}

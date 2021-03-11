import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'lib-card-lib',
  template: `
  <!-- Card -->
<div class="card promoting-card">
  <div class="card-body d-flex flex-row">
    <div>
      <h4 class="card-title font-weight-bold mb-2">{{title}}</h4>
      <p class="card-text">{{subTitle}}</p>
    </div>

  </div>
  <div class="view overlay">
    <img class="card-img-top rounded-0" [src]="src" alt="Card image cap" height="imageHeight">
  </div>
</div>
  `,
  styles: []
})
export class CardLibComponent implements OnInit {
  @Input() title: string;
  @Input() src: string;
  @Input() imageHeight: string;
  @Input() subTitle: string;
  constructor() { }
  ngOnInit() {
  }
}

import { NgModule } from '@angular/core';
import { CardLibComponent } from './card-lib.component';
import { MatCardModule } from '@angular/material';


@NgModule({
  declarations: [CardLibComponent],
  imports: [
    MatCardModule
  ],
  exports: [CardLibComponent]
})
export class CardLibModule { }

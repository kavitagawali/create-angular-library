import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLibComponent } from './card-lib.component';

describe('CardLibComponent', () => {
  let component: CardLibComponent;
  let fixture: ComponentFixture<CardLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

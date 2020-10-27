import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowsBtnComponent } from './arrows-btn.component';

describe('ArrowsBtnComponent', () => {
  let component: ArrowsBtnComponent;
  let fixture: ComponentFixture<ArrowsBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrowsBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrowsBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompFourScrollingComponent } from './comp-four-scrolling.component';

describe('CompFourScrollingComponent', () => {
  let component: CompFourScrollingComponent;
  let fixture: ComponentFixture<CompFourScrollingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompFourScrollingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompFourScrollingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

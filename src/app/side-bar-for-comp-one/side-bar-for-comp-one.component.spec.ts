import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarForCompOneComponent } from './side-bar-for-comp-one.component';

describe('SideBarForCompOneComponent', () => {
  let component: SideBarForCompOneComponent;
  let fixture: ComponentFixture<SideBarForCompOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideBarForCompOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBarForCompOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

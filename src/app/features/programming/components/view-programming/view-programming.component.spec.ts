import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProgrammingComponent } from './view-programming.component';

describe('ViewProgrammingComponent', () => {
  let component: ViewProgrammingComponent;
  let fixture: ComponentFixture<ViewProgrammingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewProgrammingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewProgrammingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

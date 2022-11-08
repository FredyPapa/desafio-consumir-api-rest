import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerProgrammingComponent } from './container-programming.component';

describe('ContainerProgrammingComponent', () => {
  let component: ContainerProgrammingComponent;
  let fixture: ComponentFixture<ContainerProgrammingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerProgrammingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerProgrammingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

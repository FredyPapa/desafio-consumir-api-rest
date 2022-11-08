import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerDeveloperComponent } from './container-developer.component';

describe('ContainerDeveloperComponent', () => {
  let component: ContainerDeveloperComponent;
  let fixture: ComponentFixture<ContainerDeveloperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerDeveloperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerDeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

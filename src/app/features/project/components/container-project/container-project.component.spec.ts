import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerProjectComponent } from './container-project.component';

describe('ContainerProjectComponent', () => {
  let component: ContainerProjectComponent;
  let fixture: ComponentFixture<ContainerProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

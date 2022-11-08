import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProgrammingComponent } from './edit-programming.component';

describe('EditProgrammingComponent', () => {
  let component: EditProgrammingComponent;
  let fixture: ComponentFixture<EditProgrammingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditProgrammingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditProgrammingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

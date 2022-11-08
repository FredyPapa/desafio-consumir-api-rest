import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProgrammingComponent } from './add-programming.component';

describe('AddProgrammingComponent', () => {
  let component: AddProgrammingComponent;
  let fixture: ComponentFixture<AddProgrammingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProgrammingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProgrammingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

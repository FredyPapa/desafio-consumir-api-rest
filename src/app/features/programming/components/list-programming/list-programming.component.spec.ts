import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProgrammingComponent } from './list-programming.component';

describe('ListProgrammingComponent', () => {
  let component: ListProgrammingComponent;
  let fixture: ComponentFixture<ListProgrammingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProgrammingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListProgrammingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

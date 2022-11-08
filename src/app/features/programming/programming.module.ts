import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProgrammingComponent } from './components/list-programming/list-programming.component';
import { AddProgrammingComponent } from './components/add-programming/add-programming.component';
import { EditProgrammingComponent } from './components/edit-programming/edit-programming.component';
import { ViewProgrammingComponent } from './components/view-programming/view-programming.component';
import { ContainerProgrammingComponent } from './components/container-programming/container-programming.component';
import { ProgrammingRoutingModule } from './programming-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ListProgrammingComponent,
    AddProgrammingComponent,
    EditProgrammingComponent,
    ViewProgrammingComponent,
    ContainerProgrammingComponent
  ],
  imports: [
    CommonModule,
    ProgrammingRoutingModule,
    SharedModule
  ]
})
export class ProgrammingModule { }

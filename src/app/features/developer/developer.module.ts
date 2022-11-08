import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListDeveloperComponent } from './components/list-developer/list-developer.component';
import { AddDeveloperComponent } from './components/add-developer/add-developer.component';
import { EditDeveloperComponent } from './components/edit-developer/edit-developer.component';
import { ViewDeveloperComponent } from './components/view-developer/view-developer.component';
import { ContainerDeveloperComponent } from './components/container-developer/container-developer.component';
import { DeveloperRoutingModule } from './developer-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ListDeveloperComponent,
    AddDeveloperComponent,
    EditDeveloperComponent,
    ViewDeveloperComponent,
    ContainerDeveloperComponent
  ],
  imports: [
    CommonModule,
    DeveloperRoutingModule,
    SharedModule
  ]
})
export class DeveloperModule { }

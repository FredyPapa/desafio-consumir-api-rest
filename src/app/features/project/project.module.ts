import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewProjectComponent } from './components/view-project/view-project.component';
import { AddProjectComponent } from './components/add-project/add-project.component';
import { EditProjectComponent } from './components/edit-project/edit-project.component';
import { ListProjectComponent } from './components/list-project/list-project.component';
import { ContainerProjectComponent } from './components/container-project/container-project.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProjectRoutingModule } from './project-routing.module';


@NgModule({
  declarations: [
    ViewProjectComponent,
    AddProjectComponent,
    EditProjectComponent,
    ListProjectComponent,
    ContainerProjectComponent
  ],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    SharedModule,
  ]
})
export class ProjectModule { }

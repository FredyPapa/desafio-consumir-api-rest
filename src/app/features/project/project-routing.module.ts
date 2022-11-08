import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddProjectComponent } from "./components/add-project/add-project.component";
import { ContainerProjectComponent } from "./components/container-project/container-project.component";
import { EditProjectComponent } from "./components/edit-project/edit-project.component";
import { ListProjectComponent } from "./components/list-project/list-project.component";

const routes:Routes=[
  {path:'',component:ContainerProjectComponent,children:
    [
      {path:'',component:ListProjectComponent},
      {path:'add',component:AddProjectComponent},
      {path:'edit',component:EditProjectComponent},
    ]
  }
];

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})

export class ProjectRoutingModule{}

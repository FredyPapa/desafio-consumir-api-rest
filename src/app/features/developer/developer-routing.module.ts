import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddDeveloperComponent } from "./components/add-developer/add-developer.component";
import { ContainerDeveloperComponent } from "./components/container-developer/container-developer.component";
import { EditDeveloperComponent } from "./components/edit-developer/edit-developer.component";
import { ListDeveloperComponent } from "./components/list-developer/list-developer.component";

const routes:Routes=[
  {path:'',component:ContainerDeveloperComponent,children:
    [
      {path:'',component:ListDeveloperComponent},
      {path:'add',component:AddDeveloperComponent},
      {path:'edit',component:EditDeveloperComponent},
    ]
  }
];

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})

export class DeveloperRoutingModule{}

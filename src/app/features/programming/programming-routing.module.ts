import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddProgrammingComponent } from "./components/add-programming/add-programming.component";
import { ContainerProgrammingComponent } from "./components/container-programming/container-programming.component";
import { EditProgrammingComponent } from "./components/edit-programming/edit-programming.component";
import { ListProgrammingComponent } from "./components/list-programming/list-programming.component";

const routes:Routes=[
  {path:'',component:ContainerProgrammingComponent,children:
    [
      {path:'',component:ListProgrammingComponent},
      {path:'add',component:AddProgrammingComponent},
      {path:'edit',component:EditProgrammingComponent},
    ]
  }
];

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})

export class ProgrammingRoutingModule{}

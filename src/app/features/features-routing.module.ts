import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',children:[
    {path:'project',loadChildren:()=>import('./project/project.module').then(m=>m.ProjectModule)},
    {path:'developer',loadChildren:()=>import('./developer/developer.module').then(m=>m.DeveloperModule)},
    {path:'programming',loadChildren:()=>import('./programming/programming.module').then(m=>m.ProgrammingModule)},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }

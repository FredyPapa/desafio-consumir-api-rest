import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutenticationGuard } from '../core/guard/autentication.guard';
import { AdminGuard } from '../core/guard/admin.guard';

const routes: Routes = [
  {path:'', canActivate:[AutenticationGuard],children:[
    {path:'login',loadChildren:()=>import('./auth/auth.module').then(m=>m.AuthModule)},
    {path:'project',loadChildren:()=>import('./project/project.module').then(m=>m.ProjectModule), canActivate:[AutenticationGuard, AdminGuard]},
    {path:'developer',loadChildren:()=>import('./developer/developer.module').then(m=>m.DeveloperModule), canActivate:[AutenticationGuard, AdminGuard]},
    {path:'programming',loadChildren:()=>import('./programming/programming.module').then(m=>m.ProgrammingModule), canActivate:[AutenticationGuard]},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }

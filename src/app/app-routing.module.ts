import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './core/components/home/home.component';
import { NotFoundComponent } from './core/components/not-found/not-found.component';
import { LoginComponent } from './features/auth/login/login.component';
import { AutenticationGuard } from './core/guard/autentication.guard';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'home', component:HomeComponent, canActivate:[AutenticationGuard]},
  {
    path:'features',
    loadChildren:()=>
      import('./features/features.module').then((m)=>m.FeaturesModule),
      canActivate:[AutenticationGuard]
  },
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

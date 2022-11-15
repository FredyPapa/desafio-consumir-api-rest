import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { SessionService } from '../../features/auth/services/session.service';
import { Session } from '../../models/session';

@Injectable({
  providedIn: 'root'
})
export class AutenticationGuard implements CanActivate {

  constructor(
    private session: SessionService,
    private router: Router
  ){ }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.session.getSession().pipe(
      map((session: Session) => {
        if(session.activeSession){
          return true;
        }else{
          //alert("Debe autenticarse");
          this.router.navigate(['']);
          return false;
        }
      })
    );
  }

}

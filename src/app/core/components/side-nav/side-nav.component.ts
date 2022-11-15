import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from '../../../features/auth/services/session.service';
import { Observable } from 'rxjs';
import { Session } from '../../../models/session';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  session$!: Observable<Session>;

  constructor(
    private router:Router,
    private sessionService: SessionService
  ) { }

  ngOnInit(): void {
    this.session$ = this.sessionService.getSession();
  }

  navegarProyecto():void{
    this.router.navigate(['features']);
  }

  closeSession(){
    this.sessionService.closeSession();
    this.router.navigate(['']);
  }
}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Session } from '../../../models/session';
import { SessionService } from '../../../features/auth/services/session.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  session$!: Observable<Session>;
  logo:string="./assets/img/logo.png";
  constructor(
    private sessionService: SessionService
  ) { }

  ngOnInit(): void {
    this.session$ = this.sessionService.getSession();
  }

}

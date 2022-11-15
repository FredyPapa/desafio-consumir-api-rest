import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { SessionService } from '../services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;

  constructor(
    private sesionService: SessionService,
    private router: Router
  ) {
      this.formLogin = new FormGroup({
      username: new FormControl('fpapa'),
      password: new FormControl('123456.2022f'),
      admin: new FormControl(true)
    })
  }

  ngOnInit(): void {
  }

  login(){
    //console.log(this.formLogin.value);
    this.sesionService.login(this.formLogin.value.usuario, this.formLogin.value.contrasena, this.formLogin.value.admin);
    this.router.navigate(['home']);
  }

}

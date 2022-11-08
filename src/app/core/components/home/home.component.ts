import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  portada:string="./assets/img/sistema-portada.jpg";
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Programming } from '../../../../models/programming';

@Component({
  selector: 'app-view-programming',
  templateUrl: './view-programming.component.html',
  styleUrls: ['./view-programming.component.css']
})
export class ViewProgrammingComponent implements OnInit {
  programming!:Programming;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data:any
  ) {
    this.programming=data;
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Developer } from '../../../../models/developer';

@Component({
  selector: 'app-view-developer',
  templateUrl: './view-developer.component.html',
  styleUrls: ['./view-developer.component.css']
})
export class ViewDeveloperComponent implements OnInit {
  developer!:Developer;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data:any
  ) {
      this.developer=data;
  }

  ngOnInit(): void {
  }

}

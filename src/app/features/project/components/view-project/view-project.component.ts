import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Project } from '../../../../models/project';

@Component({
  selector: 'app-view-project',
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.css']
})
export class ViewProjectComponent implements OnInit {
  project!:Project;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data:any
  ) {
    this.project=data;
  }

  ngOnInit(): void {
  }

}

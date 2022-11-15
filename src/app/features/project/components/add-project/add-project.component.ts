import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Project } from '../../../../models/project';
import { ProjectService } from '../../services/project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  formProject!:FormGroup;
  projects!:Project[];

  constructor(
    private projectService:ProjectService,
    private router:Router,
  ) {
    //Form
    this.formProject = new FormGroup({
      description: new FormControl('', [Validators.required]),
      startDate: new FormControl('', [Validators.required]),
      finishDate: new FormControl('', [Validators.required]),
    })
  }

  ngOnInit(): void {
  }

  save(){
    let project:Project={
      description: this.formProject.value.description,
      startDate: this.formProject.value.startDate,
      finishDate: this.formProject.value.finishDate,
      status: 1
    }
    this.projectService.addProject(project);
    alert("Se agregó el registro");
    this.router.navigate(['features/project']);
  }

  cancelAdd(){
    this.router.navigate(['features/project']);
  }

}

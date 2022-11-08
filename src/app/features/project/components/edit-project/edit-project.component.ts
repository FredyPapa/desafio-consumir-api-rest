import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Project } from '../../../../models/project';
import { ProjectService } from '../../services/project.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {

  formProject!:FormGroup;
  id:number;
  project!:Project;

  constructor(
    private projectService: ProjectService,
    private router: Router,
    private activatedroute:ActivatedRoute,
  ) {
      this.id = Number(this.activatedroute.snapshot.paramMap.get("id"));
      this.project = projectService.getProject(this.id);
      //Form
      this.formProject = new FormGroup({
      description: new FormControl(this.project.description, [Validators.required]),
      startDate: new FormControl(this.project.startDate, [Validators.required]),
      finishDate: new FormControl(this.project.finishDate, [Validators.required]),
    })
  }

  ngOnInit(): void {
  }

  save(){
    let project:Project={
      id: this.id,
      description: this.formProject.value.description,
      startDate: this.formProject.value.startDate,
      finishDate: this.formProject.value.finishDate,
      status: 1,
      deleted: false
    }
    this.projectService.editProject(project);
    this.router.navigate(['features/project']);
  }

}

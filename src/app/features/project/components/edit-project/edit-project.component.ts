import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Project } from '../../../../models/project';
import { ProjectService } from '../../services/project.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit, OnDestroy {

  formProject!:FormGroup;
  id:number;
  project!:Project;
  subscription!: Subscription;

  constructor(
    private projectService: ProjectService,
    private router: Router,
    private activatedroute:ActivatedRoute,
  ) {
      this.id = Number(this.activatedroute.snapshot.paramMap.get("id"));
      //Form
      this.formProject = new FormGroup({
      description: new FormControl('', [Validators.required]),
      startDate: new FormControl('', [Validators.required]),
      finishDate: new FormControl('', [Validators.required]),
    })
  }

  ngOnInit(): void {
    this.subscription = this.projectService.getProject(this.id).subscribe(response=>{
      this.project=response;
      this.formProject.setValue({
        description: this.project.description,
        startDate: this.project.startDate,
        finishDate: this.project.finishDate,
      })
    });
  }

  ngOnDestroy(): void {
    if(this.subscription) this.subscription.unsubscribe();
  }

  save(){
    let project:Project={
      id: this.id,
      description: this.formProject.value.description,
      startDate: this.formProject.value.startDate,
      finishDate: this.formProject.value.finishDate,
      status: 1
    }
    this.projectService.editProject(project);
    alert("Se actualizó el registro");
    this.router.navigate(['features/project']);
  }

  cancelEdit(){
    this.router.navigate(['features/project']);
  }

}

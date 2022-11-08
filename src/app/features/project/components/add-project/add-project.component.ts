import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Project } from '../../../../models/project';
import { ProjectService } from '../../services/project.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit, OnDestroy {

  formProject!:FormGroup;
  projects!:Project[];
  subscription:Subscription;

  constructor(
    private projectService:ProjectService,
    private router:Router,
  ) {
    this.subscription = this.projectService.getProjects().subscribe({
      next: (item: Project[]) => {
        this.projects = item;
      },
      error: (error) => {
        console.error(error);
      }
    });
    //Form
    this.formProject = new FormGroup({
      description: new FormControl('', [Validators.required]),
      startDate: new FormControl('', [Validators.required]),
      finishDate: new FormControl('', [Validators.required]),
    })
  }

  ngOnInit(): void {
  }

  ngOnDestroy():void{
    this.subscription.unsubscribe();
  }

  save(){
    let totalRecords:number = this.projects.length;
    let id:number =  this.projects[totalRecords-1].id + 1;
    let project:Project={
      id: id,
      description: this.formProject.value.description,
      startDate: this.formProject.value.startDate,
      finishDate: this.formProject.value.finishDate,
      status: 1,
      deleted: false
    }
    this.projectService.addProject(project);
    this.router.navigate(['features/project']);
  }

}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Programming } from '../../../../models/programming';
import { ProgrammingService } from '../../services/programming.service';
import { Router } from '@angular/router';
import { Project } from '../../../../models/project';
import { Developer } from '../../../../models/developer';
import { ProjectService } from '../../../project/services/project.service';
import { DeveloperService } from '../../../developer/services/developer.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-programming',
  templateUrl: './add-programming.component.html',
  styleUrls: ['./add-programming.component.css']
})
export class AddProgrammingComponent implements OnInit, OnDestroy {

  formProgramming!:FormGroup;
  programmings!:Programming[];
  projects!:Project[];
  developers!:Developer[];
  subscriptionProgramming:Subscription;
  subscriptionProject:Subscription;
  subscriptionDeveloper:Subscription;

  constructor(
    private programmingService:ProgrammingService,
    private projectService:ProjectService,
    private developerService:DeveloperService,
    private router:Router,
  ) {
    //Programmings
    this.subscriptionProgramming = this.programmingService.getProgrammings().subscribe({
      next: (item: Programming[]) => {
        this.programmings = item;
      },
      error: (error) => {
        console.error(error);
      }
    });
    //Projects
    this.subscriptionProject = this.projectService.getProjects().subscribe({
      next: (item: Project[]) => {
        this.projects = item;
      },
      error: (error) => {
        console.error(error);
      }
    });
    //Developers
    this.subscriptionDeveloper = this.developerService.getDevelopers().subscribe({
      next: (item: Developer[]) => {
        this.developers = item;
      },
      error: (error) => {
        console.error(error);
      }
    });
    //Form
    this.formProgramming = new FormGroup({
      project: new FormControl('', [Validators.required]),
      developers: new FormControl('', [Validators.required]),
      comment: new FormControl('', [Validators.required]),
    })
  }

  ngOnInit(): void {
  }

  ngOnDestroy():void{
    this.subscriptionProgramming.unsubscribe();
    this.subscriptionProject.unsubscribe();
    this.subscriptionDeveloper.unsubscribe();
  }

  save(){
    let totalRecords:number = this.programmings.length;
    let id:number =  this.programmings[totalRecords-1].id + 1;
    let programming:Programming={
      id: id,
      project: this.formProgramming.value.project,
      developers: this.formProgramming.value.developers,
      comment: this.formProgramming.value.comment,
      deleted: false
    }
    //console.log(programming);
    this.programmingService.addProgramming(programming);
    this.router.navigate(['features/programming']);
  }

}

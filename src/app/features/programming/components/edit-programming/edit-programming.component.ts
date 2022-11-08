import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Programming } from '../../../../models/programming';
import { ProgrammingService } from '../../services/programming.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Project } from '../../../../models/project';
import { Developer } from '../../../../models/developer';
import { Subscription } from 'rxjs';
import { ProjectService } from '../../../project/services/project.service';
import { DeveloperService } from '../../../developer/services/developer.service';

@Component({
  selector: 'app-edit-programming',
  templateUrl: './edit-programming.component.html',
  styleUrls: ['./edit-programming.component.css']
})
export class EditProgrammingComponent implements OnInit, OnDestroy {
  formProgramming!:FormGroup;
  id!:number;
  programming!:Programming;
  projects!:Project[];
  developers!:Developer[];
  subscriptionProject:Subscription;
  subscriptionDeveloper:Subscription;

  constructor(
    private programmingService: ProgrammingService,
    private projectService:ProjectService,
    private developerService:DeveloperService,
    private router: Router,
    private activatedroute:ActivatedRoute,
  ) {
      this.id = Number(this.activatedroute.snapshot.paramMap.get("id"));
      this.programming = programmingService.getProgramming(this.id);
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
      project: new FormControl(this.programming.project.id, [Validators.required]),
      developers: new FormControl(this.programming.developers, [Validators.required]),
      comment: new FormControl(this.programming.comment, [Validators.required]),
    })

  }

  ngOnInit(): void {
    //this.formProgramming.setValue({project:this.programming.project,developers:this.programming.developers, comment:this.programming.comment});
  }

  ngOnDestroy():void{
    this.subscriptionProject.unsubscribe();
    this.subscriptionDeveloper.unsubscribe();
  }

  save(){
    let programming:Programming={
      id: this.id,
      project: this.formProgramming.value.project,
      developers: this.formProgramming.value.developers,
      comment: this.formProgramming.value.comment,
      deleted: false
    }
    this.programmingService.editProgramming(programming);
    this.router.navigate(['features/programming']);
  }

}

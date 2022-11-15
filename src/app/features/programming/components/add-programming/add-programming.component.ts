import { Component, OnInit } from '@angular/core';
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
export class AddProgrammingComponent implements OnInit {

  formProgramming!:FormGroup;
  programmings!:Programming[];
  projects!:Project[];
  developers!:Developer[];
  subscriptionProject:Subscription;
  subscriptionDeveloper:Subscription;

  constructor(
    private programmingService:ProgrammingService,
    private projectService:ProjectService,
    private developerService:DeveloperService,
    private router:Router,
  ) {
    //Projects
    this.subscriptionProject = this.projectService.getProjects().subscribe(response=>{
      this.projects = response;
    });
    //Developers
    this.subscriptionDeveloper = this.developerService.getDevelopers().subscribe(response=>{
      this.developers = response;
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
    this.subscriptionProject.unsubscribe();
    this.subscriptionDeveloper.unsubscribe();
  }

  save(){
    let programming:Programming={
      project: this.formProgramming.value.project,
      developers: this.formProgramming.value.developers,
      comment: this.formProgramming.value.comment
    }
    //console.log(programming);
    this.programmingService.addProgramming(programming);
    alert("Se agregó el registro");
    this.router.navigate(['features/programming']);
  }

  cancelAdd(){
    this.router.navigate(['features/programming']);
  }

}

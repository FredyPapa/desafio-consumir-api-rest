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
  subscriptionProgramming!:Subscription;
  subscriptionProject!:Subscription;
  subscriptionDeveloper!:Subscription;

  constructor(
    private programmingService: ProgrammingService,
    private projectService:ProjectService,
    private developerService:DeveloperService,
    private router: Router,
    private activatedroute:ActivatedRoute,
  ) {
      this.id = Number(this.activatedroute.snapshot.paramMap.get("id"));
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
    this.subscriptionProgramming = this.programmingService.getProgramming(this.id).subscribe(response=>{
      this.programming=response;
      this.formProgramming.setValue({
        project: this.programming.project,
        developers: this.programming.developers,
        comment: this.programming.comment,
      })
    });
  }

  ngOnDestroy():void{
    this.subscriptionProgramming.unsubscribe();
    this.subscriptionProject.unsubscribe();
    this.subscriptionDeveloper.unsubscribe();
  }

  save(){
    let programming:Programming={
      id: this.id,
      project: this.formProgramming.value.project,
      developers: this.formProgramming.value.developers,
      comment: this.formProgramming.value.comment,
    }
    this.programmingService.editProgramming(programming);
    alert("Se actualizó el registro");
    this.router.navigate(['features/programming']);
  }

  compareWithFn(item1:any, item2:any){
    return item1 && item2 ? item1.id === item2.id : item1===item2;
  }

  cancelEdit(){
    this.router.navigate(['features/programming']);
  }

}

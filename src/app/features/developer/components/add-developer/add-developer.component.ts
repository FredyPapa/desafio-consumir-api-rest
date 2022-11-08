import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Developer } from '../../../../models/developer';
import { DeveloperService } from '../../services/developer.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-developer',
  templateUrl: './add-developer.component.html',
  styleUrls: ['./add-developer.component.css']
})
export class AddDeveloperComponent implements OnInit, OnDestroy {

  formDeveloper!:FormGroup;
  developers!:Developer[];
  subscription:Subscription;

  constructor(
    private developerService:DeveloperService,
    private router:Router,
  ) {
    this.subscription = this.developerService.getDevelopers().subscribe({
      next: (item: Developer[]) => {
        this.developers = item;
      },
      error: (error) => {
        console.error(error);
      }
    });
    //Form
    this.formDeveloper = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      contractDate: new FormControl('', [Validators.required]),
    })
  }

  ngOnInit(): void {
  }

  ngOnDestroy():void{
    this.subscription.unsubscribe();
  }

  save(){
    let totalRecords:number = this.developers.length;
    let id:number =  this.developers[totalRecords-1].id + 1;
    let developer:Developer={
      id: id,
      firstName: this.formDeveloper.value.firstName,
      lastName: this.formDeveloper.value.lastName,
      photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVPOSU5X2jb3Xyi5ulF3LQBdAhNmZs-xOWmt4QwoOwW40fVcR8uAj7CMPX0CxWPOsitNo&usqp=CAU',
      contractDate: this.formDeveloper.value.contractDate,
      deleted: false
    }
    this.developerService.addDeveloper(developer);
    this.router.navigate(['features/developer']);
  }

}

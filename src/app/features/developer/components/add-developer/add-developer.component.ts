import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Developer } from '../../../../models/developer';
import { DeveloperService } from '../../services/developer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-developer',
  templateUrl: './add-developer.component.html',
  styleUrls: ['./add-developer.component.css']
})
export class AddDeveloperComponent implements OnInit {

  formDeveloper!:FormGroup;
  developers!:Developer[];

  constructor(
    private developerService:DeveloperService,
    private router:Router,
  ) {
    //Form
    this.formDeveloper = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      contractDate: new FormControl('', [Validators.required]),
    })
  }

  ngOnInit(): void {
  }

  save(){
    let developer:Developer={
      firstName: this.formDeveloper.value.firstName,
      lastName: this.formDeveloper.value.lastName,
      photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVPOSU5X2jb3Xyi5ulF3LQBdAhNmZs-xOWmt4QwoOwW40fVcR8uAj7CMPX0CxWPOsitNo&usqp=CAU',
      contractDate: this.formDeveloper.value.contractDate,
    }
    this.developerService.addDeveloper(developer);
    alert("Se agregó el registro");
    this.router.navigate(['features/developer']);
  }

  cancelAdd(){
    this.router.navigate(['features/developer']);
  }

}

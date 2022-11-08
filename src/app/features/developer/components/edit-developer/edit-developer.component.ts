import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Developer } from '../../../../models/developer';
import { DeveloperService } from '../../services/developer.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-developer',
  templateUrl: './edit-developer.component.html',
  styleUrls: ['./edit-developer.component.css']
})
export class EditDeveloperComponent implements OnInit {

  formDeveloper!:FormGroup;
  id!:number;
  developer!:Developer;

  constructor(
    private developerService: DeveloperService,
    private router: Router,
    private activatedroute:ActivatedRoute,
  ) {
      this.id = Number(this.activatedroute.snapshot.paramMap.get("id"));
      this.developer = developerService.getDeveloper(this.id);
      //Form
    this.formDeveloper = new FormGroup({
      firstName: new FormControl(this.developer.firstName, [Validators.required]),
      lastName: new FormControl(this.developer.lastName, [Validators.required]),
      contractDate: new FormControl(this.developer.contractDate, [Validators.required]),
    })
  }

  ngOnInit(): void {
  }

  save(){
    let developer:Developer={
      id: this.id,
      firstName: this.formDeveloper.value.firstName,
      lastName: this.formDeveloper.value.lastName,
      contractDate: this.formDeveloper.value.contractDate,
      photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVPOSU5X2jb3Xyi5ulF3LQBdAhNmZs-xOWmt4QwoOwW40fVcR8uAj7CMPX0CxWPOsitNo&usqp=CAU',
      deleted: false
    }
    this.developerService.editDeveloper(developer);
    this.router.navigate(['features/developer']);
  }

}

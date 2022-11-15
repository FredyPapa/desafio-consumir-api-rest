import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Developer } from '../../../../models/developer';
import { DeveloperService } from '../../services/developer.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-edit-developer',
  templateUrl: './edit-developer.component.html',
  styleUrls: ['./edit-developer.component.css']
})
export class EditDeveloperComponent implements OnInit, OnDestroy {

  formDeveloper!:FormGroup;
  id!:number;
  developer!:Developer;
  subscription!: Subscription;

  constructor(
    private developerService: DeveloperService,
    private router: Router,
    private activatedroute:ActivatedRoute,
  ) {
      this.id = Number(this.activatedroute.snapshot.paramMap.get("id"));
      //Form
    this.formDeveloper = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      contractDate: new FormControl('' , [Validators.required]),
    })
  }

  ngOnInit(): void {
    this.subscription = this.developerService.getDeveloper(this.id).subscribe(response=>{
      this.developer=response;
      this.formDeveloper.setValue({
        firstName: this.developer.firstName,
        lastName: this.developer.lastName,
        contractDate: this.developer.contractDate,
      })
    });
  }

  ngOnDestroy(): void {
    if(this.subscription) this.subscription.unsubscribe();
  }

  save(){
    let developer:Developer={
      id: this.id,
      firstName: this.formDeveloper.value.firstName,
      lastName: this.formDeveloper.value.lastName,
      contractDate: this.formDeveloper.value.contractDate,
      photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVPOSU5X2jb3Xyi5ulF3LQBdAhNmZs-xOWmt4QwoOwW40fVcR8uAj7CMPX0CxWPOsitNo&usqp=CAU'
    }
    this.developerService.editDeveloper(developer);
    alert("Se actualizó el registro");
    this.router.navigate(['features/developer']);
  }

  cancelEdit(){
    this.router.navigate(['features/developer']);
  }

}

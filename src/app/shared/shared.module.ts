import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { StatusProjectPipe } from './pipes/status-project.pipe';
import { DevelopersNamePipe } from './pipes/developers-name.pipe';

@NgModule({
  declarations: [
    StatusProjectPipe,
    DevelopersNamePipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  exports:[
    MaterialModule,
    ReactiveFormsModule,
    StatusProjectPipe,
    DevelopersNamePipe
  ]
})
export class SharedModule { }

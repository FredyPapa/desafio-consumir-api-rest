import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Developer } from '../../../../models/developer';
import { Subscription } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { DeveloperService } from '../../services/developer.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ViewDeveloperComponent } from '../view-developer/view-developer.component';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-list-developer',
  templateUrl: './list-developer.component.html',
  styleUrls: ['./list-developer.component.css']
})
export class ListDeveloperComponent implements OnInit, OnDestroy {
  subscription!:Subscription;
  //
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'contractDate','actions'];
  dataSource:MatTableDataSource<Developer> = new MatTableDataSource<Developer>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;

  constructor(
    private developerService:DeveloperService,
    private router:Router,
    private dialog:MatDialog
  ) { }

  ngOnInit(): void {
    this.getDevelopers();
  }

  ngOnDestroy():void{
    this.subscription.unsubscribe();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getDevelopers(){
    this.subscription = this.developerService.getDevelopers().subscribe(response=>{
      this.dataSource.data = response;
    });
  }

  getDeveloper(developer:Developer){
    let dialog = this.dialog.open(ViewDeveloperComponent, {
      width: '40%',
      height: '60%',
      data: developer,
    });
  }

  editDeveloper(id:number){
    this.router.navigate(['features/developer/edit',{id}]);
  }

  deleteDeveloper(id:number){
    if (confirm('Esta seguro que desea eliminar el registro?')) {
      this.developerService.deleteDeveloper(id);
      this.getDevelopers();
      alert("El registro fue eliminado con éxito");
    }
  }

}

import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Developer } from '../../../../models/developer';
import { Observable, Subscription, map } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { DeveloperService } from '../../services/developer.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ViewDeveloperComponent } from '../view-developer/view-developer.component';

@Component({
  selector: 'app-list-developer',
  templateUrl: './list-developer.component.html',
  styleUrls: ['./list-developer.component.css']
})
export class ListDeveloperComponent implements OnInit {
  listDevelopers$!:Observable<Developer[]>;
  listDevelopers!:Array<Developer>;
  subscription!:Subscription;
  //
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'contractDate','actions'];
  dataSource!:MatTableDataSource<Developer>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private developerService:DeveloperService,
    private router:Router,
    private dialog:MatDialog
  ) {
    this.listDevelopers$ = this.developerService.getDevelopers().pipe(
      map((developers:Developer[])=>
      developers.filter((developer:Developer)=>developer.deleted===false)
      )
    );
    this.subscription=this.listDevelopers$.subscribe({
      next:(developers:Developer[])=>{
        this.listDevelopers=developers;
      },
      error:(error)=>{
        console.log(error);
      }
    });
    this.dataSource = new MatTableDataSource<Developer>(this.listDevelopers);
  }

  ngOnInit(): void {
  }

  ngOnDestroy():void{
    this.subscription.unsubscribe();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
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
      alert("El registro fue eliminado con éxito");
    }
    this.dataSource = new MatTableDataSource<Developer>(this.listDevelopers);
  }

}

import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Observable, Subscription, map } from 'rxjs';
import { Programming } from '../../../../models/programming';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ProgrammingService } from '../../services/programming.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ViewProgrammingComponent } from '../view-programming/view-programming.component';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-list-programming',
  templateUrl: './list-programming.component.html',
  styleUrls: ['./list-programming.component.css']
})
export class ListProgrammingComponent implements OnInit, OnDestroy {
  subscription!:Subscription;
  //
  displayedColumns: string[] = ['id', 'project', 'developers', 'comment','actions'];
  dataSource:MatTableDataSource<Programming>=new MatTableDataSource<Programming>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;

  constructor(
    private programmingService:ProgrammingService,
    private router:Router,
    private dialog:MatDialog
  ) { }

  ngOnInit(): void {
    this.getProgrammings();
  }

  ngOnDestroy():void{
    this.subscription.unsubscribe();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getProgrammings(){
    this.subscription = this.programmingService.getProgrammings().subscribe(response=>{
      this.dataSource.data = response;
    });
  }

  getProgramming(programming:Programming){
    let dialog = this.dialog.open(ViewProgrammingComponent, {
      width: '40%',
      height: '70%',
      data: programming,
    });
  }

  editProgramming(id:number){
    this.router.navigate(['features/programming/edit',{id}]);
  }

  deleteProgramming(id:number){
    if (confirm('Esta seguro que desea eliminar el registro?')) {
      this.programmingService.deleteProgramming(id);
      this.getProgrammings();
      alert("El registro fue eliminado con éxito");
    }
  }

}

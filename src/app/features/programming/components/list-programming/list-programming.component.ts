import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Observable, Subscription, map } from 'rxjs';
import { Programming } from '../../../../models/programming';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ProgrammingService } from '../../services/programming.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ViewProgrammingComponent } from '../view-programming/view-programming.component';

@Component({
  selector: 'app-list-programming',
  templateUrl: './list-programming.component.html',
  styleUrls: ['./list-programming.component.css']
})
export class ListProgrammingComponent implements OnInit, OnDestroy {

  listProgrammings$!:Observable<Programming[]>;
  listProgrammings!:Array<Programming>;
  subscription!:Subscription;
  //
  displayedColumns: string[] = ['id', 'project', 'developers', 'comment','actions'];
  dataSource!:MatTableDataSource<Programming>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private programmingService:ProgrammingService,
    private router:Router,
    private dialog:MatDialog
  ) {
    this.listProgrammings$ = this.programmingService.getProgrammings().pipe(
      map((programmings:Programming[])=>
      programmings.filter((programming:Programming)=>programming.deleted===false)
      )
    );
    this.subscription=this.listProgrammings$.subscribe({
      next:(programmings:Programming[])=>{
        this.listProgrammings=programmings;
      },
      error:(error)=>{
        console.log(error);
      }
    });
    this.dataSource = new MatTableDataSource<Programming>(this.listProgrammings);
  }

  ngOnInit(): void {
  }

  ngOnDestroy():void{
    this.subscription.unsubscribe();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
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
      alert("El registro fue eliminado con éxito");
    }
    this.dataSource = new MatTableDataSource<Programming>(this.listProgrammings);
  }

}

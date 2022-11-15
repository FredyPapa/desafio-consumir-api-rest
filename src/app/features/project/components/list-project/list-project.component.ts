import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { Project } from '../../../../models/project';
import { MatTableDataSource } from '@angular/material/table';
import { ViewProjectComponent } from '../view-project/view-project.component';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-list-project',
  templateUrl: './list-project.component.html',
  styleUrls: ['./list-project.component.css'],
})
export class ListProjectComponent implements OnInit, OnDestroy {
  subscription!: Subscription;
  //
  displayedColumns: string[] = [
    'id',
    'description',
    'startDate',
    'finishDate',
    'status',
    'actions',
  ];
  dataSource: MatTableDataSource<Project> = new MatTableDataSource<Project>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!:MatSort;

  constructor(
    private projectService: ProjectService,
    private router: Router,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getProjects();
  }

  ngOnDestroy(): void {
    if(this.subscription) this.subscription.unsubscribe();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getProjects(){
    this.subscription = this.projectService.getProjects().subscribe(response=>{
      this.dataSource.data = response;
    });
  }

  getProject(project: Project) {
    let dialog = this.dialog.open(ViewProjectComponent, {
      width: '40%',
      height: '40%',
      data: project,
    });
  }

  editProject(id: number) {
    this.router.navigate(['features/project/edit',{id}]);
  }

  deleteProject(id: number) {
    if (confirm('Esta seguro que desea eliminar el registro?')) {
      this.projectService.deleteProject(id);
      this.getProjects();
      alert("El registro fue eliminado con éxito");
    }
  }

}

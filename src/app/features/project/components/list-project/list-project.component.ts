import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { Router } from '@angular/router';
import { Observable, map, Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { Project } from '../../../../models/project';
import { MatTableDataSource } from '@angular/material/table';
import { ViewProjectComponent } from '../view-project/view-project.component';

@Component({
  selector: 'app-list-project',
  templateUrl: './list-project.component.html',
  styleUrls: ['./list-project.component.css'],
})
export class ListProjectComponent implements OnInit, OnDestroy {
  listProjects$!: Observable<Project[]>;
  listProjects!: Array<Project>;
  subscription!: Subscription;
  project!: Project;
  //
  displayedColumns: string[] = [
    'id',
    'description',
    'startDate',
    'finishDate',
    'status',
    'actions',
  ];
  dataSource!: MatTableDataSource<Project>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private projectService: ProjectService,
    private router: Router,
    private dialog: MatDialog
  ) {
    this.listProjects$ = this.projectService
      .getProjects()
      .pipe(
        map((projects: Project[]) =>
          projects.filter((project: Project) => project.deleted === false)
        )
      );
    this.subscription = this.listProjects$.subscribe({
      next: (projects: Project[]) => {
        this.listProjects = projects;
      },
      error: (error) => {
        console.log(error);
      },
    });
    this.dataSource = new MatTableDataSource<Project>(this.listProjects);
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
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
      alert("El registro fue eliminado con éxito");
    }
    this.dataSource = new MatTableDataSource<Project>(this.listProjects);
  }

  editar(id: number) {
    this.router.navigate(['features/estudiantes/edit', { id: id }]);
  }
}

import { Project } from '../models/project';
export let ListProjects: Project[]=[
  {
    id: 1,
    description: 'Sistema de Recursos Humanos',
    startDate: new Date('2022-06-1'),
    finishDate: new Date('2022-12-31'),
    status: 2,
    deleted: false
  },
  {
    id: 2,
    description: 'Sistema de Planeamiento y Modernización',
    startDate: new Date('2022-08-15'),
    finishDate: new Date('2023-2-20'),
    status: 1,
    deleted: false
  },
  {
    id: 3,
    description: 'Sistema de Contabilidad',
    startDate: new Date('2022-10-1'),
    finishDate: new Date('2023-7-31'),
    status: 1,
    deleted: false
  },
];

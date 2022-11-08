import { Programming } from '../models/programming';
export let ListProgrammings: Programming[] = [
  {
    id: 1,
    project: {
      id: 1,
      description: 'Sistema de Recursos Humanos',
      startDate: new Date('2022-06-1'),
      finishDate: new Date('2022-12-31'),
      status: 2,
      deleted: false,
    },
    developers: [
      {
        id: 1,
        firstName: 'Fredy',
        lastName: 'Papa',
        photo:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVPOSU5X2jb3Xyi5ulF3LQBdAhNmZs-xOWmt4QwoOwW40fVcR8uAj7CMPX0CxWPOsitNo&usqp=CAU',
        contractDate: new Date('2022-1-1'),
        deleted: false,
      },
      {
        id: 2,
        firstName: 'Magda',
        lastName: 'Vera',
        photo:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVPOSU5X2jb3Xyi5ulF3LQBdAhNmZs-xOWmt4QwoOwW40fVcR8uAj7CMPX0CxWPOsitNo&usqp=CAU',
        contractDate: new Date('2021-12-15'),
        deleted: false,
      },
    ],
    comment: 'Buen avance',
    deleted: false,
  },
  {
    id: 2,
    project: {
      id: 2,
      description: 'Sistema de Planeamiento y Modernización',
      startDate: new Date('2022-08-15'),
      finishDate: new Date('2023-2-20'),
      status: 1,
      deleted: false,
    },
    developers: [
      {
        id: 1,
        firstName: 'Fredy',
        lastName: 'Papa',
        photo:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVPOSU5X2jb3Xyi5ulF3LQBdAhNmZs-xOWmt4QwoOwW40fVcR8uAj7CMPX0CxWPOsitNo&usqp=CAU',
        contractDate: new Date('2022-1-1'),
        deleted: false,
      },
      {
        id: 2,
        firstName: 'Magda',
        lastName: 'Vera',
        photo:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVPOSU5X2jb3Xyi5ulF3LQBdAhNmZs-xOWmt4QwoOwW40fVcR8uAj7CMPX0CxWPOsitNo&usqp=CAU',
        contractDate: new Date('2021-12-15'),
        deleted: false,
      },
      {
        id: 3,
        firstName: 'Magda',
        lastName: 'Papa',
        photo:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVPOSU5X2jb3Xyi5ulF3LQBdAhNmZs-xOWmt4QwoOwW40fVcR8uAj7CMPX0CxWPOsitNo&usqp=CAU',
        contractDate: new Date('2022-2-20'),
        deleted: false,
      },
    ],
    comment: 'En coordinaciones',
    deleted: false,
  },
  {
    id: 3,
    project: {
      id: 3,
      description: 'Sistema de Contabilidad',
      startDate: new Date('2022-10-1'),
      finishDate: new Date('2023-7-31'),
      status: 1,
      deleted: false,
    },
    developers: [
      {
        id: 4,
        firstName: 'Juan',
        lastName: 'Perez',
        photo:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVPOSU5X2jb3Xyi5ulF3LQBdAhNmZs-xOWmt4QwoOwW40fVcR8uAj7CMPX0CxWPOsitNo&usqp=CAU',
        contractDate: new Date('2020-1-10'),
        deleted: false,
      },
      {
        id: 5,
        firstName: 'Maria',
        lastName: 'Peña',
        photo:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVPOSU5X2jb3Xyi5ulF3LQBdAhNmZs-xOWmt4QwoOwW40fVcR8uAj7CMPX0CxWPOsitNo&usqp=CAU',
        contractDate: new Date('2022-3-1'),
        deleted: false,
      },
    ],
    comment: 'En coordinaciones',
    deleted: false,
  },
];

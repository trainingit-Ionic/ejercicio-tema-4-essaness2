import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExplorarPage } from './explorar.page';

const routes: Routes = [
  {
    path: '',
    component: ExplorarPage,
    children: [
      {
        path: 'libros',
        children: [
          {
            path: '',
            loadChildren: './libros/libros.module#LibrosPageModule'
          }
        ]
      },
      {
        path: 'musica',
        children: [
          {
            path: '',
            loadChildren: './musica/musica.module#MusicaPageModule'
          }
        ]
      },
      {
        path: 'peliculas',
        children: [
          {
            path: '',
            loadChildren: './peliculas/peliculas.module#PeliculasPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: 'libros',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExplorarPageRoutingModule {}
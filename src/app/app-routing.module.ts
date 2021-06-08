import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallePeliculaComponent } from './componentes/detalle-pelicula/detalle-pelicula.component';
import { DetallePersonajeComponent } from './componentes/detalle-personaje/detalle-personaje.component';
import { PeliculasComponent } from './componentes/peliculas/peliculas.component';
import { PersonajesComponent } from './componentes/personajes/personajes.component';
import { PortadaComponent } from './componentes/portada/portada.component';

const routes: Routes = [
  {
    path: '',
    component: PortadaComponent
  },
  {
    path: 'personajes',
    component: PersonajesComponent
  },
  {
    path: 'peliculas',
    component: PeliculasComponent
  },
  {
    path: 'peliculas/:id',
    component: DetallePeliculaComponent
  },
  {
    path: 'personajes/:id',
    component: DetallePersonajeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

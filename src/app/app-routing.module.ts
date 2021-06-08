import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

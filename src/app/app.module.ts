import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonajesComponent } from './componentes/personajes/personajes.component';
import { PeliculasComponent } from './componentes/peliculas/peliculas.component';
import { PortadaComponent } from './componentes/portada/portada.component';
import { HttpClientModule} from '@angular/common/http';
import { DetallePeliculaComponent } from './componentes/detalle-pelicula/detalle-pelicula.component';
import { DetallePersonajeComponent } from './componentes/detalle-personaje/detalle-personaje.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonajesComponent,
    PeliculasComponent,
    PortadaComponent,
    DetallePeliculaComponent,
    DetallePersonajeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

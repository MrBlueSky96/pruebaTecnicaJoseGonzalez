import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Personaje } from 'src/app/clases/personaje';
import { PersonajesService } from 'src/app/servicios/personajes.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  listaPersonajes: Array<Personaje> = new Array<Personaje>();

  numeroPeliculas: number = 0;

  pagina: number = 1;

  constructor(private personajeService: PersonajesService, private router: Router) { }

  ngOnInit(): void {

    this.getPersonajes(this.pagina);

  }

  //función recursiva que rellena el array de personajes
  async getPersonajes(pagina: number) {

    await this.personajeService.getPaginaPersonajes(pagina).then(
      res => {
        this.listaPersonajes = this.listaPersonajes.concat(res.results);
        console.log(this.listaPersonajes);

        if (res.next !== null) {
          this.pagina++;
          this.getPersonajes(this.pagina);
        }

      }

    )

  }


  verDetalles(personaje: Personaje) {

    this.personajeService.enviarDetalles(personaje);

    this.router.navigate(['/personajes/', personaje.url.substring(personaje.url.length - 2, personaje.url.length - 1)])

  }

}

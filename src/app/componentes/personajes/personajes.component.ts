import { Component, OnInit } from '@angular/core';
import { Personaje } from 'src/app/clases/personaje';
import { PersonajesService } from 'src/app/servicios/personajes.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  listaPersonajes: Array<Personaje> = new Array<Personaje>();

  pagina: number = 1;

  constructor(private personajeService: PersonajesService) { }

  ngOnInit(): void {

    this.getPersonajes(this.pagina);

  }

  async getPersonajes(pagina: number) {

    await this.personajeService.getPaginaPersonajes(pagina).then(
      res => {
        this.listaPersonajes=this.listaPersonajes.concat(res.results);
        console.log(this.listaPersonajes);

        if (res.next !== null) {
          this.pagina++;
          this.getPersonajes(this.pagina);
        }

      }

    )

  }

}

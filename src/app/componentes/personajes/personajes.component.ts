import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';
import { Personaje } from 'src/app/clases/personaje';
import { PeliculasService } from 'src/app/servicios/peliculas.service';
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

  constructor(private personajeService: PersonajesService, private peliculaService: PeliculasService) { }

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
        } else { //Ya no hay mas paginas de personajes

          // this.listaPersonajes.forEach(personaje => {
          //   personaje.films.forEach(pelicula => {
              
  
          //     this.peliculaService.getPelicula(Number(pelicula.substring(pelicula.length-2,pelicula.length-1))).subscribe(
          //       (p: Pelicula) => {

          //         pelicula = p.title;
          //         console.log(pelicula);
                  
          //       },
          //       error => console.error(error)
          //     )
              
          //   });
          // });

        }

        

      }

    )

  }


  getPelicula(id: number) {

    this.peliculaService.getPelicula(id).subscribe(
      (p: Pelicula) => {
        //this.pelicula = p;
      },
      error => console.error(error)
    )

  }

}

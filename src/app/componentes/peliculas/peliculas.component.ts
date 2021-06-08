import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/clases/pelicula';
import { PeliculasService } from 'src/app/servicios/peliculas.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  listaPeliculas: Array<Pelicula> = new Array<Pelicula>();

  constructor(private peliculaService: PeliculasService) { }

  ngOnInit(): void {

    this.getPeliculas();

  }

  getPeliculas() {

    this.peliculaService.getPeliculas().subscribe(
      res => {
        console.log(res);
        
        this.listaPeliculas = res.results;
      },
      error => console.error(error)
    )

  }

}

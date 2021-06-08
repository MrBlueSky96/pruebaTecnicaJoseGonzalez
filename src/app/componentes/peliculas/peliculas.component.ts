import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pelicula } from 'src/app/clases/pelicula';
import { PeliculasService } from 'src/app/servicios/peliculas.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  listaPeliculas: Array<Pelicula> = new Array<Pelicula>();

  constructor(private peliculaService: PeliculasService, private router: Router) { }

  ngOnInit(): void {

    this.getPeliculas();

  }

  getPeliculas() {

    this.peliculaService.getPeliculas().subscribe(
      res => {
        console.log(res);
        this.listaPeliculas = res.results;

        this.pruebasMetodosArray(res.results);

      },
      error => console.error(error)
    )

  }

  verDetalles(pelicula: Pelicula) {

    this.peliculaService.enviarDetalles(pelicula);

    this.router.navigate(['/peliculas/',pelicula.url.substring(pelicula.url.length-2,pelicula.url.length-1)])

  }

  pruebasMetodosArray(listaPeliculas: Array<Pelicula>) {
    //filter
    let peliculasGeorge: Array<Pelicula> = listaPeliculas.filter(e => e.director === "George Lucas");
    console.log(peliculasGeorge);
    
    //find
    let aNewHope = peliculasGeorge.find(e => e.title === "A New Hope");
    console.log(aNewHope);

    //map
    let tituloAlReves = [].map.call(aNewHope?.title, function(x) {
      return x;
    }).reverse().join('');
    console.log(tituloAlReves);
        
    
  }


}

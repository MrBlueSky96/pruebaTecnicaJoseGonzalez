import { Component, OnInit } from '@angular/core';
import { PeliculasService } from 'src/app/servicios/peliculas.service';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.css']
})
export class DetallePeliculaComponent implements OnInit {

  peliculaRecibida: any;

  constructor(private peliculaService: PeliculasService) { }

  ngOnInit(): void {

    this.peliculaService.detallesEnviados.subscribe(
      p => this.peliculaRecibida = p
      
    )

    console.log(this.peliculaRecibida);

  }

}

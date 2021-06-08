import { Component, OnInit } from '@angular/core';
import { PersonajesService } from 'src/app/servicios/personajes.service';

@Component({
  selector: 'app-detalle-personaje',
  templateUrl: './detalle-personaje.component.html',
  styleUrls: ['./detalle-personaje.component.css']
})
export class DetallePersonajeComponent implements OnInit {

  personajeRecibido: any;

  constructor(private personajeService: PersonajesService) { }

  ngOnInit(): void {

    this.personajeService.detallesEnviados.subscribe(
      p => this.personajeRecibido = p
      
    )

    console.log(this.personajeRecibido);

  }

}

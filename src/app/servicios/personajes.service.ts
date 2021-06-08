import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Personaje } from '../clases/personaje';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  private detalles = new BehaviorSubject(new Personaje("","","","","","","","","",[],[],[],[],"","",""));
  detallesEnviados = this.detalles.asObservable();

  constructor(private http: HttpClient) { }

  //GET personajes por página
  getPaginaPersonajes(page: number): Promise<any> {
    return this.http.get<any>(`${environment.BACKEND_URL}people/?page=${page}`).toPromise();
  }

  enviarDetalles(personaje: Personaje) {
    this.detalles.next(personaje);
  }

}


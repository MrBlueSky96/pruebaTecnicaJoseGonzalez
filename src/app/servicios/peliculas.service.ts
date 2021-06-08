import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { Pelicula } from '../clases/pelicula';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private detalles = new BehaviorSubject(new Pelicula("",0,"","","",new Date,[],[],[],[],[],"","",""));
  detallesEnviados = this.detalles.asObservable();

  constructor(private http: HttpClient) { }

  //GET todas las películas
  getPeliculas(): Observable<any> {
    return this.http.get<any>(`${environment.BACKEND_URL}films`);
  }

  //GET película por id
  getPelicula(id: number): Observable<Pelicula> {
    return this.http.get<Pelicula>(`${environment.BACKEND_URL}films/${id}`);
  }


  enviarDetalles(pelicula: Pelicula) {
    this.detalles.next(pelicula);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Pelicula } from '../clases/pelicula';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private http: HttpClient) { }

  //GET todas las películas
  getPeliculas(): Observable<any> {
    return this.http.get<any>(`${environment.BACKEND_URL}films`);
  }

  //GET película por id
  getPelicula(id: number): Observable<Pelicula> {
    return this.http.get<Pelicula>(`${environment.BACKEND_URL}films/${id}`);
  }

}

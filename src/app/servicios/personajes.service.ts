import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment} from '../../environments/environment';
import { Personaje } from '../interfaces/personaje';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  constructor(private http: HttpClient) { }

  //GET Todos los personajes
  // getPersonajes():Observable<Array<Personaje>>{
  //   return this.http.get<Array<Personaje>>(`${environment.BACKEND_URL}people`);
  // }

  getPaginaPersonajes(page: number):Promise<any>{
      return this.http.get<any>(`${environment.BACKEND_URL}people/?page=${page}`).toPromise();
    }

}


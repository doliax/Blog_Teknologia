import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Opiniones } from '../classes/opiniones';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {
  constructor(
    private readonly http: HttpClient,
  ) {}

  //Función que carga los detalles del post y retorna un observable con los datos
  getPostById(postId: string): Observable<any> {
    //Usamos el postId que se pasa como parámetro en la url
    return this.http.get(`http://127.0.0.1:3000/posts/${postId}`);
  }

}

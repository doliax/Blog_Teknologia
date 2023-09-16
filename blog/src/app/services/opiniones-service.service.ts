import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Opiniones } from '../classes/opiniones';

@Injectable({
  providedIn: 'root'
})
export class OpinionesService {
  constructor(
    private readonly http: HttpClient,
  ) {}

 

  //Esta funcion recibe una opinion
  crearOpinion(opinion: Opiniones): Observable<any> {
    console.log("Los datos son " + opinion.email);
    //Creamos los parametros que le pasaremos en el raw json
    const params = new HttpParams().set('opinion', JSON.stringify(opinion.email)); ;
    //Lo seteamos con la opinion y convertimos los datos del form en json
    //params.set('opinion', JSON.stringify(opinion));
    //console.log(params);
    //Devolvemos los datos que hemos obtenido y se los pasamos al endpoint
    return this.http.post('http://127.0.0.1:3000/opinion', params);
    
  
  }

    //TODO Mirar porque coge los datos pero nunca llegan a la bd
  addOpinion(opinion:Opiniones): Observable<any> {
    const body=JSON.stringify(opinion);
    console.log(body)
    return this.http.post('http://127.0.0.1:3000/opinion', body)
  }
}

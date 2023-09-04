import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Posts } from '../classes/posts';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

 //Al constructor del componente le pasamos el HttpClient para hacer peticiones al backend
 constructor(private readonly http: HttpClient) {}


 ngOnInit() {
   const posts = this.http.get<Posts[]>('http://127.0.0.1:3000/posts');
   posts.subscribe((posts) => {
     this.posts = posts;
   });
 }

 posts!: Posts[];

}

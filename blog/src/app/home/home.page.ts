import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Posts } from '../classes/posts';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  post: any;

 //Al constructor del componente le pasamos el HttpClient para hacer peticiones al backend | Tambien le pasamos el router para ir al detalle post | Y el activate route para poder navegar entre peticiones http
 constructor(private readonly http: HttpClient, private router: Router, private route: ActivatedRoute) {}

 onCardClick(postId: string) {
  
  //Navega a la página de post y pasa el ID del post como parámetro
  this.router.navigate(['/post', postId]);
 }

 ngOnInit() {
   const posts = this.http.get<Posts[]>('http://127.0.0.1:3000/posts');
   posts.subscribe((posts) => {
     this.posts = posts;
   });
 }

 posts!: Posts[];

}

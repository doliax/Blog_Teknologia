import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Posts } from 'src/app/classes/posts';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {
  post: any;
  constructor(private readonly http: HttpClient, private router: Router) { }

   
   

  onCardClick(postId: string) {
    
    //Navega a la página de post y pasa el ID del post como parámetro
    this.router.navigate(['/post', postId]);
   }

   /* Esto recibe el json pero no puede mostrarlo en html
   //Estás tratando de iterar sobre un objeto JSON con ngFor, pero ngFor solo funciona con iterables, como arrays. */
   getData() {
    const posts = this.http.get<Posts[]>('http://127.0.0.1:3000/categoria/graficas');
    posts.subscribe(response => {
      this.posts = response;
      console.log(this.posts);
    });
  }

  getDataHardware() {
    const posts = this.http.get<Posts[]>('http://127.0.0.1:3000/categoria/hardware');
    posts.subscribe(response => {
      this.posts = response;
      console.log(this.posts);
    });
  }


  ngOnInit() {
  }
 
  posts!: Posts[];
  }



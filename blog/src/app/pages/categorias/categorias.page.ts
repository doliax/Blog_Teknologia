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


  ngOnInit() {
    const posts = this.http.get<Posts[]>('http://127.0.0.1:3000/posts');
    posts.subscribe((posts) => {
      this.posts = posts;
    });

    let cat_graf = document.getElementById('cat_graf');
    cat_graf?.addEventListener('click', () =>{
        
    })
  }
 
  posts!: Posts[];
  }



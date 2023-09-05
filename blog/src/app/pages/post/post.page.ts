import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostServiceService } from 'src/app/services/post-service.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {
  post: any; // Define una propiedad para almacenar los datos del post

  constructor(
    private route: ActivatedRoute,
    private postService: PostServiceService,
    private router: Router
  ) {}

  //Función para que el boton vaya atras
   goForward(){
    this.router.navigate(['/home']);
   }

  ngOnInit() {
     //Una vez haya navegado al post y en la url este el id recupera el id.
     const postId = this.route.snapshot.paramMap.get('_id');

     //Hacer el comprobante para que me funcione
     if (postId !== null) {
      console.log(`Estoy dentro de la pagina individual con el id ${postId}`);
       //Servicio para obtener los datos del post
       this.postService.getPostById(postId).subscribe(
         (data: any) => {
           this.post = data; //Almacena los datos del post en la propiedad post
         },
       );
     } else {
       //Si es null
       console.error('El ID del post es nulo.');
     }

    
     
   }

 
}

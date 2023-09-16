import { Component, OnInit } from '@angular/core';
import { Opiniones } from 'src/app/classes/opiniones';
import { OpinionesService } from 'src/app/services/opiniones-service.service';

@Component({
  selector: 'app-opiniones',
  templateUrl: './opiniones.page.html',
  styleUrls: ['./opiniones.page.scss'],
})
export class OpinionesPage implements OnInit {

  //Creamos un objeto de opiniones vacio
  opinionForm: Opiniones = {
    _id: '',
    email: '',
    puntuacion: 0,
    descripcion: '',
    
  };
  
              //Importamos el servicio desde el contructor
  constructor(private readonly opinionesService: OpinionesService) {}

  ngOnInit() {
    
  }

  onSubmit() {
 
    //Obtenemos los datos del formulario
    const opinion = {
      _id: this.opinionForm._id,
      email: this.opinionForm.email,
      puntuacion: this.opinionForm.puntuacion,
      descripcion: this.opinionForm.descripcion,
    };
  
    //Actualizamos el valor de opinionForm con los datos del formulario
    this.opinionForm = opinion;
 
    //Llamamos al service y nos suscribimos al post pasndole los datos del formulario
    this.opinionesService.addOpinion(opinion).subscribe(() => {
      this.opinionForm = {
        _id: '',
        email: '',
        puntuacion: 0,
        descripcion: ''
      };
    });
    
    }
}

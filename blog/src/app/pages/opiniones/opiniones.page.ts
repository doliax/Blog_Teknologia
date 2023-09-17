import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ToastController } from '@ionic/angular';

import { Opiniones } from 'src/app/classes/opiniones';
import { OpinionesService } from 'src/app/services/opiniones-service.service';

@Component({
  selector: 'app-opiniones',
  templateUrl: './opiniones.page.html',
  styleUrls: ['./opiniones.page.scss'],
})
export class OpinionesPage implements OnInit {


  isToast : boolean = false

  //Creamos un objeto de opiniones vacio
  opinionForm: Opiniones = {
    _id: '',
    email: '',
    puntuacion: 0,
    descripcion: '',
    
  };

  
  
              //Importamos el servicio desde el contructor                                          
  constructor(private readonly opinionesService: OpinionesService, 
                private http: HttpClient, 
                private formBuilder: FormBuilder, 
                public toastController: ToastController ) {}  //El ToastController para manejar su activación

                

  ngOnInit() {
    
  }

  async presentToast() {
    //Función asincrona que espera al toast
    const toast = await this.toastController.create({
      message: 'Opinión creada correctamente',
      duration: 5000,
      position: 'middle',
    });
    //El present lo muestra
    toast.present();
  }

  async badToast() {
    //Función asincrona que espera al toast
    const toast = await this.toastController.create({
      message: 'Faltan datos por rellenar',
      duration: 5000,
      position: 'middle',
    });
    //El present lo muestra
    toast.present();
  }

  onSubmit() {
    if (this.opinionForm.email && this.opinionForm.puntuacion && this.opinionForm.descripcion) {
    //Obtenemos los datos del formulario
    const opinion = {
      _id: this.opinionForm._id,
      email: this.opinionForm.email,
      puntuacion: this.opinionForm.puntuacion,
      descripcion: this.opinionForm.descripcion,
    };
  
    //Actualizamos el valor de opinionForm con los datos del formulario
    this.opinionForm = opinion;

    /* ESTO FUNCIONA | Pero la gracia es hacerlo desde el service
    this.http.post('http://127.0.0.1:3000/opinion',
    {
    "email" : this.opinionForm.email,
    "puntuacion": this.opinionForm.puntuacion,
    "descripcion": this.opinionForm.descripcion,
    },
    ).subscribe((data: any) => {
      console.log(data)
    });*/
 
    //Llamamos al service y nos suscribimos al post pasndole los datos del formulario
    this.opinionesService.addOpinion(opinion).subscribe(() => {
      this.opinionForm = {
        _id: '',
        email: '',
        puntuacion: 0,
        descripcion: ''
      };
      //Una vez se envien los datos llamamos a la función
      this.presentToast();
    
    });
      
    } else{
      this.badToast();
    }


}
}

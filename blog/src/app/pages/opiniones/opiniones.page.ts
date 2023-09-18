import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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


  public opForm: FormGroup;

  //Creamos un objeto de opiniones vacio
  /*opinionForm: Opiniones = {
    _id: '',
    email: '',
    puntuacion: 0,
    descripcion: '',
    
  };*/

  
  
              //Importamos el servicio desde el contructor                                          
  constructor(private readonly opinionesService: OpinionesService, 
                private http: HttpClient, 
                private formBuilder: FormBuilder, 
                public toastController: ToastController, ) {
                 

                  this.opForm = this.formBuilder.group({
                    email: ['', [Validators.required, Validators.email]],
                    puntuacion: ['', [Validators.required, Validators.min(1), Validators.max(10)]],
                    descripcion: ['', Validators.required]
                  });
                }  //El ToastController para manejar su activación

                

  ngOnInit() {
    
  }

  async presentToast() {
    //Función asincrona que espera al toast
    const toast = await this.toastController.create({
      message: 'Opinión enviada correctamente',
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


  //Esta función sirve para un form no reactivo, utilizando simplemente la clase opinion
  /*onSubmit() {
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
}*/



onSubmit2() {
  //Verificamos si el formulario es válido antes de enviar los datos
  if (this.opForm.valid) {
    //Obtenemos los valores del formulario
    const opinion = this.opForm.value;

    //Llamamos al servicio para crear la opinión
    this.opinionesService.addOpinion(opinion).subscribe(() => {
      //Reiniciamos el formulario después de enviar los datos
      this.opForm.reset({
        email: '', 
        puntuacion: 0,
        descripcion: ''
      });

      //Una vez que se envían los datos, llamamos a la función para mostrar una notificación
      this.presentToast();
    });
  } else {
    //Si el formulario no es válido, muestra un mensaje de error
    this.badToast();
  }
}

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre-nosotros',
  templateUrl: './sobre-nosotros.page.html',
  styleUrls: ['./sobre-nosotros.page.scss'],
})
export class SobreNosotrosPage implements OnInit {
  constructor() { }

   languages: string[] = ['Python', 'JavaScript', 'TypeScript'];
   robotica: string[] = ['PLC', 'Maquinaria Industrial'];
   
   
  ngOnInit() {

    /*
    this.crearLen();
    this.crearRobot();*/
  

  }

  /* Con el ion-popover esto ya no es necesario
  crearLen(){
    //Dos ids asignados
  const chip_prog = document.getElementById('prog');
 

  const div_languages = document.getElementById('languagesList');
  

  if (chip_prog && div_languages) {
  
  
   chip_prog.addEventListener('click', () => {
  
     //Clear
     div_languages.innerHTML = '';

     //Creo la lista
     const ol = document.createElement('ol');
     ol.setAttribute('style', 'list-style-type:none');

     //Recorro la lista con un forEach, en cada elemento los añado como texto al li que he creado y este lo añado al ol
     this.languages.forEach(language => {
       const li = document.createElement('li');
       li.textContent = language;
       ol.appendChild(li);
     });

     //Una vez tenga todos en el ol lo añado al div que tengo
     div_languages.appendChild(ol);

     chip_prog.addEventListener('click', () => {
        this.languages = [];
     })

   });
 };
  };

  crearRobot(){
    const chip_rob = document.getElementById('rob');
    const robotica_languages = document.getElementById('roboticaList');
    if (chip_rob && robotica_languages) {
      chip_rob.addEventListener('click', () => {
      
        //Clear
        robotica_languages.innerHTML = '';
    
        //Creo la lista
        const ol = document.createElement('ol');
       ol.setAttribute('style', 'list-style-type:none');
    
        //Recorro la lista con un forEach, en cada elemento los añado como texto al li que he creado y este lo añado al ol
        this.robotica.forEach(ro => {
          const li = document.createElement('li');
          li.textContent = ro;
          ol.appendChild(li);
        });
    
        //Una vez tenga todos en el ol lo añado al div que tengo
        robotica_languages.appendChild(ol);
    
        
        
      });
    }
  }*/

}



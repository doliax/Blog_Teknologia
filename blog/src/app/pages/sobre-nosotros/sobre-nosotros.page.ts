import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre-nosotros',
  templateUrl: './sobre-nosotros.page.html',
  styleUrls: ['./sobre-nosotros.page.scss'],
})
export class SobreNosotrosPage implements OnInit {
  constructor() { }



  ngOnInit() {

    
  //Dos ids asignados
  const chip_prog = document.getElementById('prog');
  const chip_rob = document.getElementById('rob');

  const div_languages = document.getElementById('languagesList');
  const robotica_languages = document.getElementById('roboticaList');

 
 if (chip_prog && div_languages) {
  
   chip_prog.addEventListener('click', () => {
     //Lista lenguajes
     const languages = ['Python', 'JavaScript', 'TypeScript'];

     //Clear
     div_languages.innerHTML = '';

     //Creo la lista
     const ol = document.createElement('ol');
    ol.setAttribute('style', 'list-style-type:none');

     //Recorro la lista con un forEach, en cada elemento los añado como texto al li que he creado y este lo añado al ol
     languages.forEach(language => {
       const li = document.createElement('li');
       li.textContent = language;
       ol.appendChild(li);
     });

     //Una vez tenga todos en el ol lo añado al div que tengo
     div_languages.appendChild(ol);

   });
 };

 

 if(chip_prog){
  chip_prog.addEventListener('click', () => {
    console.log("dato");
    
})
 }

 if (chip_rob && robotica_languages) {
  chip_rob.addEventListener('click', () => {
    //Lista de robotica
    const robotica = ['PLC', 'Maquinaria Industrial'];

    //Clear
    robotica_languages.innerHTML = '';

    //Creo la lista
    const ol = document.createElement('ol');
   ol.setAttribute('style', 'list-style-type:none');

    //Recorro la lista con un forEach, en cada elemento los añado como texto al li que he creado y este lo añado al ol
    robotica.forEach(ro => {
      const li = document.createElement('li');
      li.textContent = ro;
      ol.appendChild(li);
    });

    //Una vez tenga todos en el ol lo añado al div que tengo
    robotica_languages.appendChild(ol);

    
    
  });
}

}

}

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
 const div_languages = document.getElementById('languagesList');

 if (chip_prog && div_languages) {
   chip_prog.addEventListener('click', () => {
     //Lista lenguajes
     const languages = ['Python', 'JavaScript', 'TypeScript'];

     //Clear
     div_languages.innerHTML = '';

     //Creo la lista
     const ol = document.createElement('ol');

     //Recorro la lista con un forEach, en cada elemento los añado como texto al li que he creado y este lo añado al ol
     languages.forEach(language => {
       const li = document.createElement('li');
       li.textContent = language;
       ol.appendChild(li);
     });

     //Una vez tenga todos en el ol lo añado al div que tengo
     div_languages.appendChild(ol);

     
   });
 }
}

}

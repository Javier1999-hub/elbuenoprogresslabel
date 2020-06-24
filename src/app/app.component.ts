import { Component } from '@angular/core';

@Component({
  selector: 'ny-org-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prueba3';
  name="";
  onSaludar(mensaje){
    console.log(mensaje);
  }
  validando(texto:string){
    return{
      'class="w3-light-grey" class="w3-container w3-green w3-center" style="width:25%"': texto.length < 8, 
      'class="w3-container w3-red w3-center" ': texto.length >=8 && texto.length <=15,
      'class="w3-container w3-blue': texto.length >15

      
    }
  }
}



import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ny-org-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent   {
  @Input() public nombre:string;
  @Output() saludar: EventEmitter<String> = new EventEmitter<String>();

  public nombres: Array<String> = [];
  public nombreLista: string="";

  constructor() { 
  }

  onClick(){
    this.saludar.emit('Hola desde el componente hijo!');

  }


  onButtonClick(){
    //this.nombres.push((document.getElementById("nombre1") as HTMLInputElement).value);
    //this.nombreLista;
    //;
    //(document.getElementById("nombre1") as HTMLInputElement).value="";
    //(document.getElementById("nombre1") as HTMLInputElement).focus();

    //el getElementById selecciona un elemento del documento ejemplo sintaxis document.getElementById('id_del_el');
    this.nombres.push(this.nombreLista);
    this.nombreLista='';
    console.log(this.nombres);
  }

}


//Trabajo en binas de Javier cardoso y Saul Smapallo amador
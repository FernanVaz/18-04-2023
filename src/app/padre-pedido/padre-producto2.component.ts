import { Component } from '@angular/core';
import { pedido } from '../_models/pedido';

@Component({
  selector: 'app-padre-producto2',
  templateUrl: './padre-producto2.component.html',
  styleUrls: ['./padre-producto2.component.css']
})
export class PadreProducto2Component {
  pedidos1:pedido[] = [];

  constructor(){
  }

  ngOnInit(): void{

  }
  anadirpaciente(pedido:any){
    this.pedidos1=pedido

  }
}

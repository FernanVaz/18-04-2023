import { Component, EventEmitter } from '@angular/core';
import { pedido } from '../_models/pedido';
import {Output} from '@angular/core';
@Component({
  selector: 'app-hijo-producto2',
  templateUrl: './hijo-producto2.component.html',
  styleUrls: ['./hijo-producto2.component.css']
})
export class HijoProducto2Component {
  idPedido:number=0 ;
  idCliente:number=0;
  nombreCliente:string="";
  totalProducto:number=0;
  importeTotal:number=0;
  Apedido:pedido[]=[]

  @Output() enviardatos = new EventEmitter <pedido []>()
  ngOnInit(){

  }
  anadir(){
    this.Apedido.push( new pedido(this.idPedido,this.idCliente,this.nombreCliente,this.totalProducto,this.importeTotal))
    this.enviardatos.emit(this.Apedido)
    console.log(this.Apedido)
  }

}



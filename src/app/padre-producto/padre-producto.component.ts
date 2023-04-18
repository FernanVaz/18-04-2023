import { Component } from '@angular/core';
import { Productos } from '../_models/Producto';
import { tipoProducto } from "../_models/tipoProducto";
@Component({
  selector: 'app-padre-producto',
  templateUrl: './padre-producto.component.html',
  styleUrls: ['./padre-producto.component.css']
})
export class PadreProductoComponent {
  tp:string="";
  producto:Productos = new Productos(0,"",0,0,tipoProducto.ALIMENTOS)
  productos:Productos[] = [];
  anadir(){
    this.producto.tp = tipoProducto[this.tp as keyof typeof tipoProducto]
    this.productos.push(this.producto)
    console.log(this.producto)
    this.producto = new Productos(0,"",0,0,tipoProducto.ALIMENTOS)
  }
}

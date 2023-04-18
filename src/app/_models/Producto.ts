import { tipoProducto } from "./tipoProducto";

export class Productos{
  id:number = 0;
  nombre:string = "";
  cantidad:number = 0;
  precio:number = 0;
  tp:tipoProducto;

  constructor(id:number,nombre:string,cantidad:number,precio:number,tp:tipoProducto){
    this.id=id,
    this.cantidad=cantidad,
    this.nombre=nombre,
    this.cantidad=cantidad,
    this.precio = precio,
    this.tp=tp;
  }
}


export class pedido{
  idPedido:number;
  idCliente:number;
  nombreCliente:string;
  totalProducto:number;
  importeTotal:number;

  constructor(idP:number,idC:number,nm:string,tp:number,iT:number){
    this.idPedido = idP
    this.idCliente = idC
    this.nombreCliente = nm
    this.totalProducto  = tp
    this.importeTotal = iT
  }

}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hijo-producto',
  templateUrl: './hijo-producto.component.html',
  styleUrls: ['./hijo-producto.component.css']
})
export class HijoProductoComponent {
  @Input() productos: any = [];
}

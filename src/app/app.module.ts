import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PadreProductoComponent } from './padre-producto/padre-producto.component';
import { HijoProductoComponent } from './hijo-producto/hijo-producto.component';
import { FormsModule } from '@angular/forms';
import { PadreProducto2Component } from './padre-pedido/padre-producto2.component';
import { HijoProducto2Component } from './hijo-pedido/hijo-producto2.component';

@NgModule({
  declarations: [
    AppComponent,
    PadreProductoComponent,
    HijoProductoComponent,
    PadreProducto2Component,
    HijoProducto2Component
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

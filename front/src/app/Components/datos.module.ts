import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosComponent } from './productos/productos.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { StocksComponent } from './stocks/stocks.component';
import { TableModule } from '@coreui/angular';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductosComponent,
    ProveedoresComponent,
    StocksComponent,
    TableModule,
  ],
})
export class DatosModule {}

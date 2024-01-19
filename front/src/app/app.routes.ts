import { Routes } from '@angular/router';
import { DashboardComponent } from './Views/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProductosComponent } from './Views/productos/productos.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { ProveedoresComponent } from './Views/proveedores/proveedores.component';
import { StocksComponent } from './Views/stocks/stocks.component';
import { NuevoProveedorComponent } from './Views/proveedores/nuevo-proveedor/nuevo-proveedor.component';
import { NuevoStockComponent } from './Views/stocks/nuevo-stock/nuevo-stock.component';
import { NuevoProductoComponent } from './Views/productos/nuevo-producto/nuevo-producto.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children:[
      { path: 'productos', component: ProductosComponent },
  {
    path: 'nuevo-producto',
    component: NuevoProductoComponent,
  },
  {
    path: 'editar-producto/:id',
    component: NuevoProductoComponent,
  },
  {
  path: 'editar-proveedor/:id',
  component: NuevoProveedorComponent,
  },
  {
    path: 'proveedores',
    component: ProveedoresComponent,
  },
  {
    path: 'nuevo-proveedor',
    component: NuevoProveedorComponent,
  },
  {
    path: 'editar-proveedor/:id',
    component: NuevoProveedorComponent,
  },
  {
    path: 'stocks',
    component: StocksComponent,
  },
  {
    path: 'nuevo-stock',
    component: NuevoStockComponent,
  },
  {
    path: 'editar-stock/:id',
    component: NuevoStockComponent,
  },
    ]
  },

  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponentComponent },
];

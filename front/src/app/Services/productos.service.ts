import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProducto } from '../Interfaces/iproducto';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  private urlBase: string =
    'http://localhost/Sexto_PHP_ANGULAR/Inventario/Controllers/Producto.Controller.php?op=';
    constructor(private clientePhp: HttpClient) {}
  todos(): Observable<IProducto[]> {
    return this.clientePhp.get<IProducto[]>(this.urlBase + 'todos');
  }
  insertar(productos: IProducto): Observable<any> {
    var prov = new FormData();
    prov.append('nombre', productos.Nombre);
      prov.append('precio', productos.Precio.toString());
      prov.append('stock', productos.Cantidad.toString());
      return this.clientePhp.post(this.urlBase + 'insertar', prov);
  }
  eliminar(id: number): Observable<any> {
    var prov = new FormData();
    prov.append('ProductoId', id.toString());
    return this.clientePhp.post(this.urlBase + 'eliminar', prov);
  }
  uno(id: number): Observable<IProducto> {
    var prov = new FormData();
    prov.append('ProductoId', id.toString());
    return this.clientePhp.post<IProducto>(this.urlBase + 'uno', prov);
  }
  actualizar(productos: IProducto, id: number): Observable<any> {
    var prov = new FormData();
    prov.append('proveedorId', id.toString());
    prov.append('nombre', productos.Nombre);
      prov.append('precio', productos.Precio.toString());
      prov.append('stock', productos.Cantidad.toString());
      return this.clientePhp.post(this.urlBase + 'insertar', prov);
  }
}

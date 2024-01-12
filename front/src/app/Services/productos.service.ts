import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProducto } from '../Interfaces/iproducto';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  private urlBase: string =
    'http://localhost/Sexto_PHP_ANGULAR/Inventario/Controllers/Producto.Controller.php?op=';
  constructor(private cliente: HttpClient) {}

  todos(): Observable<IProducto[]> {
    return this.cliente.get<IProducto[]>(this.urlBase + 'todos');
  }
  uno(id: number): Observable<IProducto> {
    var productos = new FormData();
    return this.cliente.post<IProducto>(this.urlBase + 'uno', productos);
  }
  insertar(producto: IProducto): Observable<any> {
    var prod = new FormData();
    prod.append('nombre', producto.Nombre);
    prod.append('precio', producto.Precio.toString());
    prod.append('stock', producto.Cantidad.toString());
    return this.cliente.post(this.urlBase + 'insertar', prod);
  }
  actualizar(producto: IProducto): Observable<any> {
    var prod = new FormData();
    prod.append('id', producto.ProductoId.toString());
    prod.append('nombre', producto.Nombre);
    prod.append('precio', producto.Precio.toString());
    prod.append('stock', producto.Cantidad.toString());
    return this.cliente.post(this.urlBase + 'actualizar', prod);
  }
  eliminar(id: number): Observable<any> {
    var prod = new FormData();
    prod.append('id', id.toString());
    return this.cliente.post(this.urlBase + 'eliminar', prod);
  }
}
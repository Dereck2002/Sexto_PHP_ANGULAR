import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iproveedor } from '../Interface/iproveedor';

@Injectable({
  providedIn: 'root',
})
export class ProveedorService {
  private urlBase: string =
    'http://localhost/Sexto_PHP_ANGULAR/Inventario/Controllers/Proveedor.Controller.php?op=';
  constructor(private cliente: HttpClient) {}

  todos(): Observable<Iproveedor[]> {
    return this.cliente.get<Iproveedor[]>(this.urlBase + 'todos');
  }
  uno(id: number): Observable<Iproveedor> {
    var proveedores = new FormData();
    return this.cliente.post<Iproveedor>(this.urlBase + 'uno', proveedores);
  }
  insertar(proveedor: Iproveedor): Observable<any> {
    var prod = new FormData();
    prod.append('nombres', proveedor.Nombres);
    prod.append('telefono', proveedor.Telefono.toString());
    prod.append('correo', proveedor.Correo.toString());
    return this.cliente.post(this.urlBase + 'insertar', prod);
  }
  actualizar(proveedor: Iproveedor): Observable<any> {
    var prod = new FormData();
    prod.append('id', proveedor.ProveedorId.toString());
    prod.append('nombres', proveedor.Nombres);
    prod.append('telefono', proveedor.Telefono.toString());
    prod.append('correo', proveedor.Correo.toString());
    return this.cliente.post(this.urlBase + 'actualizar', prod);
  }
  eliminar(id: number): Observable<any> {
    var prod = new FormData();
    prod.append('id', id.toString());
    return this.cliente.post(this.urlBase + 'eliminar', prod);
  }
}

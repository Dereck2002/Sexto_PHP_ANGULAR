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
    var prov = new FormData();
    prov.append('nombres', proveedor.Nombres);
    prov.append('telefono', proveedor.Telefono.toString());
    prov.append('correo', proveedor.Correo.toString());
    return this.cliente.post(this.urlBase + 'insertar', prov);
  }
  actualizar(proveedor: Iproveedor): Observable<any> {
    var prov = new FormData();
    prov.append('id', proveedor.ProveedorId.toString());
    prov.append('nombres', proveedor.Nombres);
    prov.append('telefono', proveedor.Telefono.toString());
    prov.append('correo', proveedor.Correo.toString());
    return this.cliente.post(this.urlBase + 'actualizar', prov);
  }
  eliminar(id: number): Observable<any> {
    var prov = new FormData();
    prov.append('id', id.toString());
    return this.cliente.post(this.urlBase + 'eliminar', prov);
  }
}

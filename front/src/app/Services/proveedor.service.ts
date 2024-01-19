import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProveedor } from '../Interfaces/iproveedor';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ProveedorService {
  private urlBase: string = environment.URL + 'Proveedor.Controller.php?op=';
  constructor(private clientePhp: HttpClient) {}
  todos(): Observable<IProveedor[]> {
    return this.clientePhp.get<IProveedor[]>(this.urlBase + 'todos');
  }
  insertar(proveedor: IProveedor): Observable<any> {
    var prov = new FormData();
    prov.append('Nombre', proveedor.Nombre);
    prov.append('Producto_suministrado', proveedor.Producto_suministrado);
    prov.append('Fecha_inicio_contrato', proveedor.Fecha_inicio_contrato);
    return this.clientePhp.post(this.urlBase + 'insertar', prov);
  }
  eliminar(id: number): Observable<any> {
    var prov = new FormData();
    prov.append('proveedorId', id.toString());
    return this.clientePhp.post(this.urlBase + 'eliminar', prov);
  }
  uno(id: number): Observable<IProveedor> {
    var prov = new FormData();
    prov.append('ProveedorId', id.toString());
    return this.clientePhp.post<IProveedor>(this.urlBase + 'uno', prov);
  }
  actualizar(proveedor: IProveedor, id: number): Observable<any> {
    var prov = new FormData();
    prov.append('proveedorId', id.toString());
    prov.append('Nombre', proveedor.Nombre);
    prov.append('Producto_suministrado', proveedor.Producto_suministrado);
    prov.append('Fecha_inicio_contrato', proveedor.Fecha_inicio_contrato);
    return this.clientePhp.post(this.urlBase + 'actualizar', prov);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IStock } from '../Interfaces/istock';

@Injectable({
  providedIn: 'root',
})
export class StockService {
  private urlBase: string =
    'http://localhost/Sexto_PHP_ANGULAR/Inventario/Controllers/Stock.Controller.php?op=';
  constructor(private cliente: HttpClient) {}

  todos(): Observable<IStock[]> {
    return this.cliente.get<IStock[]>(this.urlBase + 'todos');
  }
  uno(id: number): Observable<IStock> {
    var stock = new FormData();
    return this.cliente.post<IStock>(this.urlBase + 'uno', stock);
  }
  insertar(stock: IStock): Observable<any> {
    var prov = new FormData();
    prov.append('cantidad', stock.Cantidad.toString());
    prov.append('precio_Venta', stock.Precio_Venta.toString());
    return this.cliente.post(this.urlBase + 'insertar', prov);
  }
  actualizar(stock: IStock): Observable<any> {
    var prov = new FormData();
    prov.append('id', stock.StockId.toString());
    prov.append('cantidad', stock.Cantidad.toString());
    prov.append('precio_Venta', stock.Precio_Venta.toString());
    return this.cliente.post(this.urlBase + 'actualizar', prov);
  }
  eliminar(id: number): Observable<any> {
    var prov = new FormData();
    prov.append('id', id.toString());
    return this.cliente.post(this.urlBase + 'eliminar', prov);
  }
}
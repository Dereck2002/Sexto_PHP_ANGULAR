import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stock } from '../Interface/stock';

@Injectable({
  providedIn: 'root',
})
export class StockService {
  private urlBase: string =
    'http://localhost/Sexto_PHP_ANGULAR/Inventario/Controllers/Stock.Controller.php?op=';
  constructor(private cliente: HttpClient) {}

  todos(): Observable<Stock[]> {
    return this.cliente.get<Stock[]>(this.urlBase + 'todos');
  }
  uno(id: number): Observable<Stock> {
    var stock = new FormData();
    return this.cliente.post<Stock>(this.urlBase + 'uno', stock);
  }
  insertar(stock: Stock): Observable<any> {
    var prod = new FormData();
    prod.append('cantidad', stock.Cantidad.toString());
    prod.append('precio_Venta', stock.Precio_Venta.toString());
    return this.cliente.post(this.urlBase + 'insertar', prod);
  }
  actualizar(stock: Stock): Observable<any> {
    var prod = new FormData();
    prod.append('id', stock.StockId.toString());
    prod.append('cantidad', stock.Cantidad.toString());
    prod.append('precio_Venta', stock.Precio_Venta.toString());
    return this.cliente.post(this.urlBase + 'actualizar', prod);
  }
  eliminar(id: number): Observable<any> {
    var prod = new FormData();
    prod.append('id', id.toString());
    return this.cliente.post(this.urlBase + 'eliminar', prod);
  }
}

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
    stock.append('stockId', id.toString());
    return this.cliente.post<IStock>(this.urlBase + 'uno', stock);
  }
  insertar(stocks: IStock): Observable<any> {
    var stock = new FormData();
    stock.append('productoId', stocks.ProductoId.toString());
    stock.append('proveedorId', stocks.ProveedorId.toString());
    stock.append('cantidad', stocks.Cantidad.toString());
    stock.append('precio_Venta', stocks.Precio_Venta.toString());
    console.log(stock);
    return this.cliente.post(this.urlBase + 'insertar', stock);
  }
  actualizar(stocks: IStock, id: number): Observable<any> {
    var stock = new FormData();
    stock.append('stockId', id.toString());
    stock.append('productoId', stocks.ProductoId.toString());
    stock.append('proveedorId', stocks.ProveedorId.toString());
    stock.append('cantidad', stocks.Cantidad.toString());
    stock.append('precio_Venta', stocks.Precio_Venta.toString());
    return this.cliente.post(this.urlBase + 'actualizar', stock);
  }
  eliminar(id: number): Observable<any> {
    var stock = new FormData();
    stock.append('stockId', id.toString());
    return this.cliente.post(this.urlBase + 'eliminar', stock);
  }
}

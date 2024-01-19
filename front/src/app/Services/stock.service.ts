import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IStock } from '../Interfaces/istock';

@Injectable({
  providedIn: 'root',
})
export class StockService {
  private urlBase: string =
    'http://localhost/Examen_Segunda_Parcial/Inventario/Controllers/Inventario.Controller.php?op=';
  constructor(private cliente: HttpClient) {}

  todos(): Observable<IStock[]> {
    return this.cliente.get<IStock[]>(this.urlBase + 'todos');
  }

  uno(id: number): Observable<IStock> {
    var stock = new FormData();
    stock.append('ID_producto', id.toString());
    return this.cliente.post<IStock>(this.urlBase + 'uno', stock);
  }
  insertar(stocks: IStock): Observable<any> {
    var stock = new FormData();
    stock.append('ID_proveedor', stocks.ID_proveedor.toString());
    stock.append('Nombre_producto', stocks.Nombre_producto.toString());
    stock.append('Cantidad', stocks.Cantidad.toString());
    stock.append('Precio_unitario', stocks.Precio_unitario.toString());
    console.log(stock);
    return this.cliente.post(this.urlBase + 'insertar', stock);
  }
  actualizar(stocks: IStock, id: number): Observable<any> {
    var stock = new FormData();
    stock.append('ID_producto', id.toString());
    stock.append('ID_proveedor', stocks.ID_proveedor.toString());
    stock.append('Nombre_producto', stocks.Nombre_producto.toString());
    stock.append('Cantidad', stocks.Cantidad.toString());
    stock.append('Precio_unitario', stocks.Precio_unitario.toString());
    return this.cliente.post(this.urlBase + 'actualizar', stock);
  }
  eliminar(id: number): Observable<any> {
    var stock = new FormData();
    stock.append('ID_producto', id.toString());
    return this.cliente.post(this.urlBase + 'eliminar', stock);
  }
}

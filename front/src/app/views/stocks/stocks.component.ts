import { Component } from '@angular/core';
import { IStock } from '../../Interfaces/istock';
import { StockService } from '../../Services/stock.service';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-stocks',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './stocks.component.html',
  styleUrl: './stocks.component.css',
})
export class StockComponent {
  title = 'Stock';
  stock: IStock[];

  constructor(private stockServicio: StockService) {}

  ngOnInit() {
    this.cargaTabla();
  }
  cargaTabla() {
    this.stockServicio.todos().subscribe((listastock) => {
      this.stock = listastock;
      console.log(listastock);
    });
  }
  alerta() {
    Swal.fire('Stock', 'Mensaje en Stock', 'success');
  }

  eliminar(StockId: number) {
    Swal.fire({
      title: 'Stock',
      text: 'Esta seguro que desea eliminar el registro',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Eliminar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.stockServicio.eliminar(StockId).subscribe((datos) => {
          this.cargaTabla();
          Swal.fire({
            title: 'Stock',
            text: 'Se eliminó con éxito el registro',
            icon: 'success',
          });
        });
      } else {
        Swal.fire({
          title: 'Stock',
          text: 'El usuario canceló la acción',
          icon: 'info',
        });
      }
    });
  }
}

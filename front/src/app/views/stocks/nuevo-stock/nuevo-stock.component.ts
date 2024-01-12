import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { StockService } from '../../../Services/stock.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-nuevo-stock',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './nuevo-stock.component.html',
  styleUrl: './nuevo-stock.component.css',
})
export class NuevoStockComponent {
  title = '';
  id!: number;

  Stock: FormGroup = new FormGroup({
    ProductoId: new FormControl('', Validators.required),
    ProveedorId: new FormControl('', Validators.required),
    Cantidad: new FormControl('', Validators.required),
    Precio_Venta: new FormControl('', Validators.required),
  });
  constructor(
    private StockServicio: StockService,
    private rutas: Router,
    private parametros: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.parametros.snapshot.params['id'];
    console.log(this.id);
    if (this.id == 0 || this.id == undefined) {
      this.title = 'Nuevo Stock';
    } else {
      this.title = 'Actualizar Stock';
      this.StockServicio.uno(this.id).subscribe((res) => {
        console.log(res);
        this.Stock.patchValue({
          ProductoId: res.ProductoId,
          ProveedorId: res.ProveedorId,
          Cantidad: res.Cantidad,
          Precio_Venta: res.Precio_Venta,
        });
      });
    }
  }
  get f() {
    return this.Stock.controls;
  }

  grabar() {
    Swal.fire({
      title: 'Stock',
      text: 'Esta seguro que desea guardar el registro',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Guardar',
    }).then((result) => {
      if (result.isConfirmed) {
        if (this.id == 0 || this.id == undefined) {
          this.StockServicio
            .insertar(this.Stock.value)
            .subscribe((res) => {
              Swal.fire({
                title: 'Stock',
                text: 'Se insertó con éxito el registro',
                icon: 'success',
              });
              this.rutas.navigate(['/stocks']);
              this.id = 0;
            });
        } else {
          this.StockServicio
            .actualizar(this.Stock.value, this.id)
            .subscribe((res) => {
              Swal.fire({
                title: 'Stock',
                text: 'Se actualizó con éxito el registro',
                icon: 'success',
              });
              this.rutas.navigate(['/stocks']);
              this.id = 0;
            });
        }
      } else {
        Swal.fire({
          title: 'Stocks',
          text: 'El usuario canceló la acción',
          icon: 'info',
        });
      }
    });
  }
}

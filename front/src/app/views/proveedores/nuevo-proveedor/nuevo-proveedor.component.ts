import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ProveedorService } from '../../../Services/proveedor.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-nuevo-proveedor',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './nuevo-proveedor.component.html',
  styleUrl: './nuevo-proveedor.component.css',
})
export class NuevoProveedorComponent {
  title = '';
  id!: number;

  provedor: FormGroup = new FormGroup({
    Nombre: new FormControl('', Validators.required),
    Producto_suministrado: new FormControl('', Validators.required),
    Fecha_inicio_contrato: new FormControl('', Validators.required),
  });
  constructor(
    private proveedorServicio: ProveedorService,
    private rutas: Router,
    private parametros: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.parametros.snapshot.params['id'];
    console.log(this.id);
    if (this.id == 0 || this.id == undefined) {
      this.title = 'Nuevo Proveedor';
    } else {
      this.title = 'Actualizar Proveedor';
      this.proveedorServicio.uno(this.id).subscribe((res) => {
        console.log(res);
        this.provedor.patchValue({
          Nombre: res.Nombre,
          Producto_suministrado: res.Producto_suministrado,
          Fecha_inicio_contrato: res.Fecha_inicio_contrato,
        });
      });
    }
  }
  get f() {
    return this.provedor.controls;
  }

  grabar() {
    Swal.fire({
      title: 'Proveedores',
      text: 'Esta seguro que desea guardar el registro',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Guardar',
    }).then((result) => {
      if (result.isConfirmed) {
        if (this.id == 0 || this.id == undefined) {
          this.proveedorServicio
            .insertar(this.provedor.value)
            .subscribe((res) => {
              Swal.fire({
                title: 'Proveedores',
                text: 'Se insertó con éxito el registro',
                icon: 'success',
              });
              this.rutas.navigate(['/dashboard/proveedores']);
              this.id = 0;
            });
        } else {
          this.proveedorServicio
            .actualizar(this.provedor.value, this.id)
            .subscribe((res) => {
              Swal.fire({
                title: 'Proveedores',
                text: 'Se actualizó con éxito el registro',
                icon: 'success',
              });
              this.rutas.navigate(['/dashboard/proveedores']);
              this.id = 0;
            });
        }
      } else {
        Swal.fire({
          title: 'Proveedores',
          text: 'El usuario canceló la acción',
          icon: 'info',
        });
      }
    });
  }
}

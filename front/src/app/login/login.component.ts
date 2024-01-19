import { Component } from '@angular/core';
import { UsuariosService } from '../Services/usuarios.service';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { environment } from '../../environments/environment.development';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  uid: FormGroup = new FormGroup({
    correo: new FormControl('', Validators.required),
    contrasenia: new FormControl('', [Validators.required]),
  });

  constructor(
    private usuariosServicio: UsuariosService,
    private rutas: Router
  ) {}
  login() {
    this.usuariosServicio.login(this.uid.value).subscribe((usuario) => {
      console.log(usuario);
      if (usuario) {
        environment.rol = usuario.Rol;
        sessionStorage.setItem('rol', usuario.Rol);
        this.rutas.navigate(['/dashboard']);
       
      } else {
        Swal.fire('Inventarios', 'Error al iniciar sesión', 'error');
      }
    });
  }
}

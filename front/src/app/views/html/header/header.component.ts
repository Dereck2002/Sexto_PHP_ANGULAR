import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  rol = sessionStorage.getItem('rol');
  constructor(private rutas: Router) {}
  salir() {
    sessionStorage.removeItem('rol');
    this.rutas.navigate(['/']);
   
  }
}

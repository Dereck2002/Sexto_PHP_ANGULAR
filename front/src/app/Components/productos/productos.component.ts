import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProductosComponent {}

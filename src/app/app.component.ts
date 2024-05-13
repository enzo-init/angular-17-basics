import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProductService } from './api/products.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-17-basics';
  public data = [0,2,3,4,5];
  weather:string = 'sunny';

  private readonly productsSvc = inject(ProductService);
  products$ = this.productsSvc.getAllProducts();

  constructor () {}

  changeWeather(weather: string) {
    this.weather = weather;
  }
}

import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class NavigationService {

  // Signal global: estado del título de la página
  currentPageTitle = signal<string>('Page 1');

  // Método para actualizar el título
  setTitle(title: string): void {
    this.currentPageTitle.set(title);
  }
}
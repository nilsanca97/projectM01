import { Component, inject, OnInit } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-page5',
  standalone: true,
  //imports: [HeaderComponent],
  templateUrl: './page5.html',
  styleUrl: './page5.scss',
})
export class Page5 implements OnInit {

  private navigationService = inject(NavigationService);
  
  ngOnInit(): void {
    // 🧠 Al cargar la página, actualiza el título global
    this.navigationService.setTitle('Page 5');
  }
  titulo: string = 'Page 5';
  resultado: number = 0;

  aumentar() {
    this.resultado++;
  }
  disminuir() {
    this.resultado--;
  } 
}

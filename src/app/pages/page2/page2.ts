import { Component, inject, OnInit } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-page2',
  imports: [],
  templateUrl: './page2.html',
  styleUrl: './page2.scss',
})
export class Page2 implements OnInit{
  private navigationService = inject(NavigationService);
  
  ngOnInit(): void {
    //  Al cargar la página, actualiza el título global
    this.navigationService.setTitle('Page 2');
  }
}

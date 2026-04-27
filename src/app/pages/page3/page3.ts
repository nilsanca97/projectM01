import { Component, inject, OnInit } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-page3',
  imports: [],
  templateUrl: './page3.html',
  styleUrl: './page3.scss',
})
export class Page3 implements OnInit {
  private navigationService = inject(NavigationService);
  ngOnInit(): void {
    //  Al cargar la página, actualiza el título global
    
    this.navigationService.setTitle('Page 3');
  }
}

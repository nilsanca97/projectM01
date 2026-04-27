import { Component, inject } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

/*@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class HeaderComponent {}*/

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html', // ✔
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  // inyectamos el service
  navigationService = inject(NavigationService);
}
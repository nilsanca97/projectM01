import { Routes } from '@angular/router';
import { Page2 } from './pages/page2/page2';
import { Page3 } from './pages/page3/page3';
import { Page5 } from './pages/page5/page5';

export const routes: Routes = [
  { path: '', redirectTo: '/page1', pathMatch: 'full' },
  { path: 'page2', component: Page2 },
  { path: 'page3', component: Page3 },
  { path: 'page5', component: Page5 }
];

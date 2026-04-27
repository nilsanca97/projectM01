import { Component, inject, OnInit, signal } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';
import { UserService } from '../../services/user.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../../models/interfaces';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-page2',
  imports: [ReactiveFormsModule],
  templateUrl: './page2.html',
  styleUrl: './page2.scss',
})
export class Page2 implements OnInit{
  private navigationService = inject(NavigationService);
  

  ngOnInit(): void {
    //  Al cargar la página, actualiza el título global
    this.navigationService.setTitle('Page 2');
  }
  private fb = inject(FormBuilder);

  //private userService = inject(UserService);

  private authService = inject(AuthService);

  submitted = signal(false);
  loading = signal(false);

  registerForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  async register() {
    this.submitted.set(true);
    if (this.registerForm.invalid) {
      this.submitted.set(false);
      return;
    }

    this.loading.set(true);
    
    const { name, email, password } = this.registerForm.value;
    
    if (name == null || email == null || password == null) {
      this.loading.set(false);
      this.submitted.set(false);
      return;
    }

    try {
      await this.authService.register({ name, email, password });
    } catch (error) {
      console.error('Error en registro:', error);
    } finally {
      this.registerForm.reset();
      this.submitted.set(false);
      this.loading.set(false);
    }
  }
}

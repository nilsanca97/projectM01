import { Component, inject, OnInit, signal } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';
import { FormBuilder, NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ChuletonService } from '../../services/chuleton.service';
import { Chuleton } from '../../models/interfaces';

@Component({
  selector: 'app-page3',
  imports: [ReactiveFormsModule],
  templateUrl: './page3.html',
  styleUrl: './page3.scss',
})
export class Page3 implements OnInit {
  private navigationService = inject(NavigationService);
  ngOnInit(): void {
    //  Al cargar la página, actualiza el título global
    this.navigationService.setTitle('Page 3');
  }
  //Inyección del FormBuilder tipado (NO permite null/undefined)
  private fb = inject(NonNullableFormBuilder);
  //Servicio para guardar el chuleton
  chuletonService = inject(ChuletonService);

  //Signals para controlar estado UI (Angular moderno)
  submitted = signal(false);
  loading = signal(false);

  // Formulario tipado
  // - Todos los campos son obligatorios
  // - Ya tienen tipo correcto desde el inicio
  chuletonForm = this.fb.group({
    tipo: ['', [Validators.required]], // string obligatorio
    origen: ['', [Validators.required]],  // string obligatorio
    peso: ['', [Validators.required, Validators.min(1)]], //number obligatorio y minimo valor 1
    maduracion: ['', [Validators.required]], // number obligatorio 
    cantidad: ['', [Validators.required, Validators.min(1)]]  // number obligatorio y minimo valor 1
  });

  addChuleton() {
     //  Activar estados de UI
    this.loading.set(true);
    this.submitted.set(true);

    // validacion del formulario (Angular)
    // Si falla algún validator (required, min, etc.), salimos
    if(this.chuletonForm.invalid) {
      this.loading.set(false);
      return;
    }

    // 👉 Obtenemos valores TIPADOS (sin null ni undefined)
    // 🔥 Esto es la clave del formulario tipado
    const formValue = this.chuletonForm.getRawValue();
    
    // Creamos el objeto directamente y convertimos algunas variables explicitamente a number
    const chuleton: Chuleton = {
      tipo: formValue.tipo,
      origen: formValue.origen,
      peso: Number(formValue.peso),
      maduracion: Number(formValue.maduracion),
      cantidad: Number(formValue.cantidad),
    };
  
     // Guardamos el chuleton
    this.chuletonService.setChuleton(chuleton);

    //  Reseteamos el formulario
    this.chuletonForm.reset();
    // Restauramos estados UI
    this.loading.set(false);
    this.submitted.set(false);
  }
}

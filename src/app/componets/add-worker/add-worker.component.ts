import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

import { ApiService } from '../../service/api.service';
import { IProvincia } from '../../models/provincia.model';



@Component({
  selector: 'app-add-worker',
  standalone: true,
  imports: [RouterLink, CommonModule, ReactiveFormsModule],
  templateUrl: './add-worker.component.html',
  styleUrl: './add-worker.component.css',
})
export class AddWorkerComponent {
  provinciaList: IProvincia[] = [];

  imageUrl: string | ArrayBuffer | null = null;
  formularioEjemplo!: FormGroup;

  constructor(private formBuilder: FormBuilder, private apiService: ApiService) {
    this.formularioEjemplo = this.formBuilder.group({
      nombres: ['', Validators.required],
      apellidos: ['', Validators.required],
      cedula: [
        '',
        [
          Validators.required,
          Validators.minLength(9),
          Validators.maxLength(10),
        ],
      ],
      provincia: ['', Validators.required],
      Fnacimiento: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      ObservacionesPerson: [''],
      imagen: [''],
      FIngreso: ['', Validators.required],
      cargo: ['', Validators.required],
      departamento: ['', Validators.required],
      prvinciaEmpresa: ['', Validators.required],
      salario: ['', Validators.required],
      JornadaParcial: ['', Validators.required],
      ObservacionesEmpresariales: [''],
    });
  }

  ngOnInit(): void {
    this.apiService.getprovinciaList().subscribe((data: IProvincia[]) => {
      this.provinciaList = data;
    });

  }


  ContinuarForm() {
    const parteEmail = document.getElementById('email');
    const partePaswoord = document.getElementById('password');
    const etiquetaPersonal = document.getElementById('datosPersonales');
    const etiquetaLaboral = document.getElementById('datosLaborales');
    parteEmail?.classList.add('d-none');
    partePaswoord?.classList.remove('d-none');
    etiquetaLaboral?.classList.add('active', 'text-info');
    etiquetaPersonal?.classList.remove('active', 'text-info');
    etiquetaPersonal?.classList.add('text-secondary');
  }

  datosPersonales() {
    const parteEmail = document.getElementById('email');
    const partePaswoord = document.getElementById('password');
    const etiquetaPersonal = document.getElementById('datosPersonales');
    const etiquetaLaboral = document.getElementById('datosLaborales');
    if (parteEmail?.classList.contains('d-none')) {
      partePaswoord?.classList.add('d-none');
      parteEmail?.classList.remove('d-none');
      etiquetaPersonal?.classList.add('active', 'text-info');
      etiquetaLaboral?.classList.remove('active', 'text-info');
    }
  }

  datosLaborales() {
    const parteEmail = document.getElementById('email');
    const partePaswoord = document.getElementById('password');
    const etiquetaPersonal = document.getElementById('datosPersonales');
    const etiquetaLaboral = document.getElementById('datosLaborales');
    if (partePaswoord?.classList.contains('d-none')) {
      parteEmail?.classList.add('d-none');
      partePaswoord?.classList.remove('d-none');
      etiquetaLaboral?.classList.add('active', 'text-info');
      etiquetaPersonal?.classList.remove('active', 'text-info');
      etiquetaPersonal?.classList.add('text-secondary');
    }
  }

  formulario() {
    console.log(this.formularioEjemplo.value);
  }

  openFileInput() {
    document.getElementById('fileInput')?.click();
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imageUrl = reader.result;
      };
    }
  }
}

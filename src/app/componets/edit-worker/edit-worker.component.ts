import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { ApiService } from '../../service/api.service';
import { IProvincia } from '../../models/provincia.model';

@Component({
  selector: 'app-edit-worker',
  standalone: true,
  imports: [RouterLink, CommonModule, ReactiveFormsModule],
  templateUrl: './edit-worker.component.html',
  styleUrl: './edit-worker.component.css'
})
export class EditWorkerComponent implements OnInit {

  provinciaList: IProvincia[] = [];
  imagenBase64?: string = '';

  imageUrl: string | ArrayBuffer | null = null;
  formularioEjemplo!: FormGroup;

  constructor(public formBuilder: FormBuilder, private apiService: ApiService, private Route: Router) {
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

  formulario(): any {
    let empleado = {
      emp_nombres: this.formularioEjemplo.value.nombres,
      emp_apellidos: this.formularioEjemplo.value.apellidos,
      emp_cedula: this.formularioEjemplo.value.cedula,
      emp_fec_nacimiento: this.formularioEjemplo.value.Fnacimiento,
      emp_correo: this.formularioEjemplo.value.email,
      emp_obs_pers: this.formularioEjemplo.value.ObservacionesPerson,
      emp_foto: this.imagenBase64,
      emp_fec_ingreso: this.formularioEjemplo.value.FIngreso,
      emp_cargo: this.formularioEjemplo.value.cargo,
      emp_departamento: this.formularioEjemplo.value.departamento,
      emp_salario: this.formularioEjemplo.value.salario,
      emp_jor_parcial: this.formularioEjemplo.value.JornadaParcial,
      emp_obs_lab: this.formularioEjemplo.value.ObservacionesEmpresariales,
      provPersona_id: this.formularioEjemplo.value.provincia,
      provLaboral_id: this.formularioEjemplo.value.prvinciaEmpresa,
    }
    console.log(empleado)
    this.apiService.postempleado(empleado).subscribe();
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

  openFileInput() {
    document.getElementById('fileInput')?.click();
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.convertirImagenABase64(file);
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imageUrl = reader.result;
      };
    }
  }

  convertirImagenABase64(file: File) {
    const reader = new FileReader();
    reader.onload = () => {
      const base64String = reader.result as string;
      this.imagenBase64 = base64String;
    };
    reader.readAsDataURL(file);
  }

}

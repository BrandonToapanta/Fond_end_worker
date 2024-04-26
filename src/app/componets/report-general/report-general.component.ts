import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ApiService } from '../../service/api.service';



@Component({
  selector: 'app-report-general',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './report-general.component.html',
  styleUrl: './report-general.component.css',
})
export class ReportGeneralComponent implements OnInit {
  reporteGeneral: any;
  identificador = 1

  constructor(private apiService: ApiService) {

  }

  ngOnInit(): void {
    this.apiService.getreporte().subscribe(data => {
      this.reporteGeneral = data;
    });

  }

  identificadorOrden() {
    if (this.identificador == 1) {
      this.identificador++;
    } else {
      this.identificador--;
    }
  }

  ordenarNombre() {
    this.apiService.getreporteOrden('emp_nombres', this.identificador).subscribe(data => {
      this.reporteGeneral = data;
    });
    this.identificadorOrden()
  }

  ordenarCedula() {
    this.apiService.getreporteOrden('emp_cedula', this.identificador).subscribe(data => {
      this.reporteGeneral = data;
    });
    this.identificadorOrden()
  }

  ordenarCodigo() {
    this.apiService.getreporteOrden('id', this.identificador).subscribe(data => {
      this.reporteGeneral = data;
    });
    this.identificadorOrden()
  }

  ordenarDepartamento() {
    this.apiService.getreporteOrden('emp_departamento', this.identificador).subscribe(data => {
      this.reporteGeneral = data;
    });
    this.identificadorOrden()
  }

  ordenarCargo() {
    this.apiService.getreporteOrden('emp_cargo', this.identificador).subscribe(data => {
      this.reporteGeneral = data;
    });
    this.identificadorOrden()
  }

  ordenarFecha() {
    this.apiService.getreporteOrden('emp_fec_ingreso', this.identificador).subscribe(data => {
      this.reporteGeneral = data;
    });
    this.identificadorOrden()
  }

  ordenarStatus() {
    this.apiService.getreporteOrden('emp_status', this.identificador).subscribe(data => {
      this.reporteGeneral = data;
    });
    this.identificadorOrden()
  }

  ordenarSueldo() {
    this.apiService.getreporteOrden('emp_salario', this.identificador).subscribe(data => {
      this.reporteGeneral = data;
    });
    this.identificadorOrden()
  }

  ordenarEmail() {
    this.apiService.getreporteOrden('emp_correo', this.identificador).subscribe(data => {
      this.reporteGeneral = data;
    });
    this.identificadorOrden()
  }

  ordenarProvincia() {
    this.apiService.getreporteOrden('nombre_provincia', this.identificador).subscribe(data => {
      this.reporteGeneral = data;
    });
    this.identificadorOrden()
  }
}

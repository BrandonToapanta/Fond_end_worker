import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IEmpleados } from '../../models/provincia.model';
import { ApiService } from '../../service/api.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-list-workers',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './list-workers.component.html',
  styleUrl: './list-workers.component.css'
})
export class ListWorkersComponent implements OnInit {
  empleadosList: IEmpleados[]=[];

  formularioBusqueda!: FormGroup;
  constructor(private apiService: ApiService, public formBuilder: FormBuilder){
    this.formularioBusqueda = this.formBuilder.group({
      nombre: [''],
      codigo: [''],
    });
  }

  ngOnInit(): void {
    this.apiService.getempleadosList().subscribe((data: IEmpleados[]) => {
      this.empleadosList = data;
    });
  }

  formulario(){
    console.log(this.formularioBusqueda.value)
    this.apiService.getbuscarEmpleados(this.formularioBusqueda.value.codigo,this.formularioBusqueda.value.nombre).subscribe(res=>{
      this.empleadosList = res;
    })
  }
}

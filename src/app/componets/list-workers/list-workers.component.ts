import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IEmpleados } from '../../models/provincia.model';
import { ApiService } from '../../service/api.service';


@Component({
  selector: 'app-list-workers',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './list-workers.component.html',
  styleUrl: './list-workers.component.css'
})
export class ListWorkersComponent implements OnInit {
  empleadosList: IEmpleados[]=[];

  constructor(private apiService: ApiService){}

  ngOnInit(): void {
    this.apiService.getempleadosList().subscribe((data: IEmpleados[]) => {
      this.empleadosList = data;
      console.log(data)
    });
  }
}

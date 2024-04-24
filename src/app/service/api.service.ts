import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { IProvincia, IEmpleados, IEmpleadoAdd } from '../models/provincia.model';


@Injectable({
  providedIn: 'root'
})
export class ApiService {


  url: string ='http://localhost/ejercicio-backend/';

  constructor(private clietHttp :HttpClient ){}

  getprovinciaList(): Observable<IProvincia[]>{
    return this.clietHttp.get<IProvincia[]>(`${this.url}provincia.php`);
  }

  getempleadosList(): Observable<IEmpleados[]>{
    return this.clietHttp.get<IEmpleados[]>(`${this.url}empleados.php`);
  }

  postempleado(datosEmpleado: IEmpleadoAdd): Observable<any> {
    return this.clietHttp.post(`${this.url}empleados.php`,datosEmpleado);
  }

}

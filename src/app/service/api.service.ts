import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { IProvincia, IEmpleados, IEmpleadoAdd } from '../models/provincia.model';


@Injectable({
  providedIn: 'root'
})
export class ApiService {


  url: string = 'http://localhost/ejercicio-backend/';

  constructor(private clietHttp: HttpClient) { }

  getprovinciaList(): Observable<IProvincia[]> {
    return this.clietHttp.get<IProvincia[]>(`${this.url}provincia.php`);
  }

  getempleadosList(): Observable<IEmpleados[]> {
    return this.clietHttp.get<IEmpleados[]>(`${this.url}empleados.php`);
  }

  getreporte(): Observable<any> {
    return this.clietHttp.get(`${this.url}reporte.php`);
  }

  getempleado(id: string | number): Observable<any> {
    return this.clietHttp.get(`${this.url}empleados.php?id=${id}`);
  }

  getreporteOrden(parametro:string,contador:number): Observable<any> {
    return this.clietHttp.get(`${this.url}reporte.php?${parametro}=${contador}`);
  }

  getbuscarEmpleados(id: string | number, nombre: string): Observable<any> {
    return this.clietHttp.get(`${this.url}buscar.php?emp_nombres=${nombre}&id=${id}`);
  }

  postempleado(datosEmpleado: any): Observable<any> {
    return this.clietHttp.post(`${this.url}empleados.php`, datosEmpleado);
  }

  putempleado(datosEmpleado: any): Observable<any> {
    return this.clietHttp.put(`${this.url}empleados.php`, datosEmpleado);
  }

}

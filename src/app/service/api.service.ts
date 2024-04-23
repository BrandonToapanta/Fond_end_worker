import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { IProvincia } from '../models/provincia.model';


@Injectable({
  providedIn: 'root'
})
export class ApiService {


  urlPrivincia: string ='http://localhost/ejercicio-backend/provincia.php';

  constructor(private clietHttp :HttpClient ){}

  getprovinciaList(): Observable<IProvincia[]>{
    return this.clietHttp.get<IProvincia[]>(this.urlPrivincia);
  }

}

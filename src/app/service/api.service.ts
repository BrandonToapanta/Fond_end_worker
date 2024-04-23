import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private http = inject(HttpClient)

  private urlPrivincia: string ='http://localhost/ejercicio-backend/provincia.php';


  getProvincia():Observable<any>{
    return this.http.get<any>(this.urlPrivincia);
  }

}

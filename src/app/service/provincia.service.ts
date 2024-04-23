import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { State } from 'datatables.net-bs4';


@Injectable({
  providedIn: 'root'
})

export class ProvinciaService {
  private http = inject(HttpClient)

  #state = signal<State>({
    loading: true,
    data: []
  });

  constructor() {
    this.http.get('http://localhost/ejercicio-backend/provincia.php').subscribe(res => {
      this.#state.set({
        loading: false,
        data: res,
      })
    });
  }
}

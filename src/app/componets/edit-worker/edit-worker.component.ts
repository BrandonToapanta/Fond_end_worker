import { Component, OnInit, inject } from '@angular/core';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-edit-worker',
  standalone: true,
  imports: [],
  templateUrl: './edit-worker.component.html',
  styleUrl: './edit-worker.component.css'
})
export class EditWorkerComponent implements OnInit {

  provinciaList: any[] = [];
  private apiService = inject(ApiService);

  ngOnInit(): void {

  }

}

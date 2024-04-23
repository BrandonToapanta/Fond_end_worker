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
  provincia: any;

  constructor(private apiService: ApiService) {

  }

  ngOnInit(): void {
    this.apiService.getprovinciaList().subscribe(data => {
      this.provincia = data;
      console.log(this.provincia);
    });

  }
}

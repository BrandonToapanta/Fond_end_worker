import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-report-general',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './report-general.component.html',
  styleUrl: './report-general.component.css',
})
export class ReportGeneralComponent {
}

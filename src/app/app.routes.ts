import { Routes } from '@angular/router';
import { AddWorkerComponent } from './componets/add-worker/add-worker.component';
import { EditWorkerComponent } from './componets/edit-worker/edit-worker.component';
import { ListWorkersComponent } from './componets/list-workers/list-workers.component';
import { ReportGeneralComponent } from './componets/report-general/report-general.component';

export const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: 'list-workers' },
  { path: 'add-worker', component: AddWorkerComponent },
  { path: 'edit-worker/:id', component: EditWorkerComponent },
  { path: '', component: ListWorkersComponent },
  { path: 'report-general', component: ReportGeneralComponent },
];

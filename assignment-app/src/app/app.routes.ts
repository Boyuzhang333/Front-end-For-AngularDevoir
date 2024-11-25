import { Routes } from '@angular/router';

import { AssignmentListComponent } from './assignment-list/assignment-list.component';
import { AddAssignmentComponent } from './add-assignment/add-assignment.component';

export const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: AssignmentListComponent },
  { path: 'add', component: AddAssignmentComponent }
];


import { Routes } from '@angular/router';

import { AssignmentListComponent } from './assignment-list/assignment-list.component';
import { AddAssignmentComponent } from './add-assignment/add-assignment.component';
import { AssignmentDetailComponent } from './assignment-detail/assignment-detail.component';

export const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: AssignmentListComponent },
  { path: 'add', component: AddAssignmentComponent },
  { path: 'assignment/:id', component: AssignmentDetailComponent }
];


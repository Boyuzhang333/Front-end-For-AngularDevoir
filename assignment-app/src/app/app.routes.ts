import { Routes } from '@angular/router';

import { AssignmentListComponent } from './assignment-list/assignment-list.component';
import { AddAssignmentComponent } from './add-assignment/add-assignment.component';
import { AssignmentDetailComponent } from './assignment-detail/assignment-detail.component';
import { EditAssignmentComponent } from './assignment-edit/assignment-edit.component';
import { authGuard } from './models/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  
  { path: 'list', component: AssignmentListComponent },
  { path: 'add', component: AddAssignmentComponent },
  { path: 'assignment/:id', component: AssignmentDetailComponent },
  { path: 'assignment/:id/edit', 
    component: EditAssignmentComponent,
    canActivate: [authGuard],
  }, // 编辑作业
];


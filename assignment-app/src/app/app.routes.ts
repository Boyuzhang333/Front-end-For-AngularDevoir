import { Routes } from '@angular/router';

import { AssignmentListComponent } from './assignment-list/assignment-list.component';
import { AddAssignmentComponent } from './add-assignment/add-assignment.component';
import { AssignmentDetailComponent } from './assignment-detail/assignment-detail.component';
import { EditAssignmentComponent } from './assignment-edit/assignment-edit.component';
import { authGuard } from './models/auth.guard';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // 默认重定向到 home
  { path: 'home', component: WelcomeComponent }, // 欢迎页面
  { path: 'list', component: AssignmentListComponent },
  { path: 'add', component: AddAssignmentComponent },
  { path: 'assignment/:id', component: AssignmentDetailComponent },
  { path: 'assignment/:id/edit', 
    component: EditAssignmentComponent,
    canActivate: [authGuard],
  }, // 编辑作业
  { path: 'login',component: LoginComponent}
];


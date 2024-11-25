import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { AssignmentsService } from '../models/assignments.service';
import { Assignment } from '../models/assignment.model';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';


@Component({
  selector: 'app-add-assignment',
  standalone: true,
  imports: [
            RouterModule,
            MatDatepickerModule,
            MatInputModule,
            MatNativeDateModule,
            FormsModule,
            ReactiveFormsModule,
            MatFormFieldModule


  ],
  templateUrl: './add-assignment.component.html',
  styleUrl: './add-assignment.component.css'
})
export class AddAssignmentComponent {
  assignment: Assignment = {
    nom: '',
    rendu: false,
    dateDeRendu: new Date()
  };

  constructor(private assignmentsService: AssignmentsService, private router: Router) {}

  onSubmit() {
    if (this.assignment.nom && this.assignment.dateDeRendu) {
      this.assignmentsService.addAssignment(this.assignment).subscribe(() => {
        console.log('Nouveau devoir ajouté:', this.assignment);
        this.router.navigate(['/list']); // 提交后返回作业列表页面
      });
        }
  }
}
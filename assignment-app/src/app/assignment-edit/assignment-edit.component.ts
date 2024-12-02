import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AssignmentsService } from '../models/assignments.service';
import { Assignment } from '../models/assignment.model';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { RouterModule } from '@angular/router';
import { MatNativeDateModule } from '@angular/material/core';
@Component({
  selector: 'app-edit-assignment',
  standalone: true,
  templateUrl: './assignment-edit.component.html',
  styleUrls: ['./assignment-edit.component.css'],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    RouterModule,
    MatNativeDateModule
  ],
})
export class EditAssignmentComponent implements OnInit {
  assignment!: Assignment;

  constructor(
    private route: ActivatedRoute,
    private assignmentsService: AssignmentsService,
    public router: Router
  ) {}

  ngOnInit(): void {
    // 从路由中获取 ID，并加载作业数据
    const id = this.route.snapshot.params['id'];
    this.assignmentsService.getAssignment(+id).subscribe((assignment) => {
      if (assignment) {
        this.assignment = assignment;
      } else {
        console.error(`Assignment with ID ${id} not found.`);
      }
    });
  }

  onSave(): void {
    // 更新作业并跳转到列表
    this.assignmentsService.updateAssignment(this.assignment).subscribe(() => {
      console.log('Assignment updated:', this.assignment);
      this.router.navigate(['/list']);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssignmentsService } from '../models/assignments.service';
import { RouterModule } from '@angular/router';
import { Assignment } from '../models/assignment.model';
import { AssignmentDetailComponent } from '../assignment-detail/assignment-detail.component';
import { Router } from '@angular/router';
import { MatButtonModule} from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  standalone: true,
  selector: 'app-assignment-list',
  templateUrl: './assignment-list.component.html',
  styleUrls: ['./assignment-list.component.css'],
  imports: [
    CommonModule,
    RouterModule,
    AssignmentDetailComponent,
    MatButtonModule,
    MatCardModule
  ]
})
export class AssignmentListComponent implements OnInit {
  assignments: Assignment[] = [];
  selectedAssignment?: Assignment; // 当前选中的作业

  constructor(private assignmentsService: AssignmentsService,private router: Router) {}

  ngOnInit(): void {
    this.getAssignments();
  }

  getAssignments() {
    this.assignmentsService.getAssignments().subscribe((assignments: Assignment[]) => {
      this.assignments = assignments;
    });
  }
  trackByAssignmentNom(index: number, assignment: Assignment): string {
    return assignment.nom;
  }
}

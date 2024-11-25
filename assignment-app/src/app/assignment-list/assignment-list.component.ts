import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssignmentsService } from '../models/assignments.service';
import { RouterModule } from '@angular/router';
import { Assignment } from '../models/assignment.model';


@Component({
  standalone: true,
  selector: 'app-assignment-list',
  templateUrl: './assignment-list.component.html',
  styleUrls: ['./assignment-list.component.css'],
  imports: [CommonModule,
            RouterModule
  ]
})
export class AssignmentListComponent implements OnInit {
  assignments: { nom: string; rendu: boolean; dateDeRendu: Date }[] = []; // 用于保存从服务获取的作业数据

  constructor(private assignmentsService: AssignmentsService) {}

  ngOnInit(): void {
    // 调用服务来获取作业数据
    this.getAssignments();
  }

  getAssignments() {
    this.assignmentsService.getAssignments().subscribe((assignments: any) => {
      this.assignments = assignments;
    });
  }

  trackByAssignmentNom(index: number, assignment: { nom: string; rendu: boolean; dateDeRendu: Date }): string {
    return assignment.nom;
  }
}

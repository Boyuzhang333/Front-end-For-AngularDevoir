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
  currentPage = 1; // 当前页码
  totalPages = 1; // 总页数
  limit = 4; // 每页记录数

  constructor(private assignmentsService: AssignmentsService,private router: Router) {}

  ngOnInit(): void {
    this.getAssignmentsPage();
  }

  getAssignmentsPage() {
    this.assignmentsService.getAssignmentsPage(this.currentPage, this.limit).subscribe((data: any) => {
      this.assignments = data.docs;
      this.totalPages = data.totalPages;
    });

  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.getAssignmentsPage();
    }
  }

  // 跳转到下一页
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.getAssignmentsPage();
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { AssignmentsService } from '../models/assignments.service';
import { Assignment } from '../models/assignment.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-assignment-detail',
  standalone: true,
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css'],
  imports: [
            CommonModule,
            FormsModule,
            MatButtonModule,
            MatCardModule,
            MatCheckboxModule,
            RouterModule
  ]
})
export class AssignmentDetailComponent implements OnInit {
  assignment: Assignment | null = null; // 初始化为 null

  isToDelete: boolean = false; // 用于复选框状态

  constructor(
    private route: ActivatedRoute, // 用于获取路由参数
    private router: Router, 
    private assignmentsService: AssignmentsService // 用于获取作业数据
  ) {}

  ngOnInit(): void {
    // 从路由中获取 id
    const id = +this.route.snapshot.params['id']; // 使用 + 转换为 number
    console.log(`Fetching assignment with id: ${id}`);
    // 调用服务获取作业数据
    this.assignmentsService.getAssignment(id).subscribe((assignment) => {
      if (assignment) {
        this.assignment = assignment; // 赋值给 assignment
        console.log('Assignment loaded:', assignment);
      } else {
        console.error(`Assignment with id ${id} not found.`);
      }
    });
  }

  onDelete(): void {
    if (this.isToDelete && this.assignment) {
      this.assignmentsService.deleteAssignment(this.assignment).subscribe(() => {
        console.log('Assignment deleted:', this.assignment);
        this.router.navigate(['/list']); // 删除后跳转回列表页面
      });
    } else {
      console.log('Checkbox not selected. Assignment not deleted.');
    }
  }
}

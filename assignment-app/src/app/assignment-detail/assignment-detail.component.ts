import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Assignment } from '../models/assignment.model';
import { MatButton } from '@angular/material/button';
@Component({
  selector: 'app-assignment-detail',
  standalone: true,
  imports: [CommonModule,
            MatButton
  ],
  templateUrl: './assignment-detail.component.html',
  styleUrls: ['./assignment-detail.component.css']
})
export class AssignmentDetailComponent {
  @Input() assignment!: Assignment;  // 接收来自父组件的作业数据
  @Output() assignmentDeleted = new EventEmitter<Assignment>(); // 向父组件传递删除事件
  @Output() assignmentUpdated = new EventEmitter<Assignment>(); // 向父组件传递更新事件

  onDelete() {
    this.assignmentDeleted.emit(this.assignment);
  }

  onToggleRendu() {
    this.assignment.rendu = !this.assignment.rendu;
    this.assignmentUpdated.emit(this.assignment);
  }
}

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Assignment } from '../models/assignment.model';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {
  private assignments: Assignment[] = [
    { id:1,nom: 'Devoir 1', rendu: true, dateDeRendu: new Date('2023-11-15') },
    { id:2,nom: 'Devoir 2', rendu: false, dateDeRendu: new Date('2023-12-01') },
    { id:3,nom: 'Devoir 3', rendu: true, dateDeRendu: new Date('2023-11-20') }
  ];

  constructor() {}
  getAssignment(id: number): Observable<Assignment | undefined> {
    // 从本地数组中找到匹配的作业
    const assignment = this.assignments.find(a => a.id === id);
    return of(assignment); // 返回一个 Observable
  }
  

  getAssignments(): Observable<Assignment[]> {
    return of(this.assignments);
  }

  addAssignment(assignment: Assignment): Observable<Assignment> {
    this.assignments.push(assignment);
    return of(assignment); // 返回包含新作业的 Observable
  }
  deleteAssignment(assignment: Assignment): Observable<Assignment> {
    this.assignments = this.assignments.filter(a => a.id !== assignment.id);
    return of(assignment); // 返回已删除的作业
  }
  

  updateAssignment(assignment: Assignment): Observable<Assignment> {
    const index = this.assignments.findIndex((a) => a.id === assignment.id);
    if (index !== -1) {
      this.assignments[index] = assignment; // 更新本地数组
    }
    return of(assignment); // 返回更新后的作业
  }
  
 
  
  
}

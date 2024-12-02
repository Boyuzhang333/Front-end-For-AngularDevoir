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

  getAssignments(): Observable<Assignment[]> {
    return of(this.assignments);
  }

  addAssignment(assignment: Assignment): Observable<Assignment> {
    this.assignments.push(assignment);
    return of(assignment); // 返回包含新作业的 Observable
  }
  deleteAssignment(assignment: Assignment): Observable<Assignment> {
    this.assignments = this.assignments.filter(a => a !== assignment);
    return of(assignment);
    
  }

  updateAssignment(assignment: Assignment): Observable<Assignment> {
    const index = this.assignments.findIndex(a => a.nom === assignment.nom);
    if (index !== -1) {
      this.assignments[index] = assignment;
    }
    return of(assignment);//不加返回值，不给你调用之后的语句转ts文件
  }
  
}

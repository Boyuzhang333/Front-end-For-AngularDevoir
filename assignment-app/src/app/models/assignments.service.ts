import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Assignment } from '../models/assignment.model';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {
  private assignments: Assignment[] = [
    { nom: 'Devoir 1', rendu: true, dateDeRendu: new Date('2023-11-15') },
    { nom: 'Devoir 2', rendu: false, dateDeRendu: new Date('2023-12-01') },
    { nom: 'Devoir 3', rendu: true, dateDeRendu: new Date('2023-11-20') }
  ];

  constructor() {}

  getAssignments(): Observable<Assignment[]> {
    return of(this.assignments);
  }

  addAssignment(assignment: Assignment): Observable<Assignment> {
    this.assignments.push(assignment);
    return of(assignment); // 返回包含新作业的 Observable
  }
}

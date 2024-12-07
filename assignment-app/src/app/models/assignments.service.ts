import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // 引入 HttpClient
import { Observable } from 'rxjs';
import { Assignment } from '../models/assignment.model';

@Injectable({
  providedIn: 'root',
})
export class AssignmentsService {
  backendURL = 'https://back-end-for-angulardevoir.onrender.com/api/assignments'; // 后端 API 地址

  constructor(private http: HttpClient) {}

  /**
   * 获取所有作业
   */
  getAssignments(): Observable<Assignment[]> {
    return this.http.get<Assignment[]>(this.backendURL); // 从后端获取数据
  }

  /**
   * 获取单个作业
   * @param id 作业 ID
   */
  getAssignment(id: number|string): Observable<Assignment> {
    return this.http.get<Assignment>(`${this.backendURL}/${id}`); // 根据 ID 获取单个作业
  }

  /**
   * 添加作业
   * @param assignment 要添加的作业
   */
  addAssignment(assignment: Assignment): Observable<Assignment> {
    return this.http.post<Assignment>(this.backendURL, assignment); // 向后端发送 POST 请求
  }

  /**
   * 删除作业
   * @param assignment 要删除的作业
   */
  deleteAssignment(assignment: Assignment): Observable<void> {
    return this.http.delete<void>(`${this.backendURL}/${assignment.id}`); // 根据 ID 删除作业
  }

  /**
   * 更新作业
   * @param assignment 要更新的作业
   */
  updateAssignment(assignment: Assignment): Observable<Assignment> {
    return this.http.put<Assignment>(
      `${this.backendURL}/${assignment.id}`,
      assignment
    ); // 更新作业
  }


  getAssignmentsPage(page: number, limit: number): Observable<any> {
    return this.http.get<any>(`${this.backendURL}?page=${page}&limit=${limit}`);
  }
  
}



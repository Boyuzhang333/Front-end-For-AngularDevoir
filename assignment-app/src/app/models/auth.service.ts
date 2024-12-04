import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // 用户数据
  private users = [
    { username: 'admin', password: 'admin123', role: 'admin' },
    { username: 'user', password: 'user123', role: 'user' },
  ];

  // 当前登录用户
  private currentUser: { username: string; role: string } | null = null;

  // 登录方法
  logIn(username: string, password: string): boolean {
    const user = this.users.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      this.currentUser = { username: user.username, role: user.role };
      return true; // 登录成功
    }
    return false; // 登录失败
  }

  // 登出方法
  logOut(): void {
    this.currentUser = null; // 清空当前用户
  }

  // 检查是否已登录
  isLogged(): boolean {
    return this.currentUser !== null;
  }

  // 检查是否是管理员
  isAdmin(): boolean {
    return this.currentUser?.role === 'admin';
  }
}

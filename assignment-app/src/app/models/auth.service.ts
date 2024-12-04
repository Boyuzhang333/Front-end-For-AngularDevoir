import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // 全局可用的服务
})
export class AuthService {
  loggedIn = false; // 默认未登录

  // 用户登录方法
  logIn() {
    this.loggedIn = true;
  }

  // 用户登出方法
  logOut() {
    this.loggedIn = false;
  }

  // 判断用户是否为管理员
  isAdmin(): Promise<boolean> {
    return new Promise((resolve) => {
      resolve(this.loggedIn); // 如果登录了，认为是管理员
    });
  }
}

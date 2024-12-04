import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService); // 注入 AuthService
  const router = inject(Router); // 注入 Router

  return authService.isAdmin().then((isAuthenticated) => {
    if (isAuthenticated) {
      console.log('Admin access granted!');
      return true; // 用户有权限，允许访问
    } else {
      console.log('Access denied. Redirecting to home.');
      router.navigate(['/list']); // 重定向到首页
      return false; // 拒绝访问
    }
  });
};

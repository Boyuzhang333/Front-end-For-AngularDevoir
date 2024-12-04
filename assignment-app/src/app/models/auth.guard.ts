import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService); // 注入 AuthService
  const router = inject(Router); // 注入 Router

  if (authService.isAdmin()) {
    console.log('Admin access granted!');
    return true; // 允许访问
  } else {
    console.log('Access denied. Redirecting to login.');
    router.navigate(['/home']); // 重定向到列表页面
    return false; // 拒绝访问
  }
};

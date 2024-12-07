import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AssignmentListComponent } from './assignment-list/assignment-list.component'; // 导入子组件
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from './models/auth.service';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
            AssignmentListComponent,
            RouterModule,
            MatSlideToggleModule,
            MatButtonModule,
            MatToolbarModule,
            MatIconModule,
            CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'assignment-app-devoir';
  isSidebarActive = false; // 用于控制侧边栏显示状态

  currentPage = 1;
  totalPages = 10; // 假设总页数初始化为 10
  hasPrevPage = false;
  hasNextPage = true;

  constructor(public authService: AuthService, private router: Router) {}

  toggleLogin() {
    if (this.authService.isLogged()) {
      this.authService.logOut();
      this.router.navigate(['/home']);
    } else {
      this.router.navigate(['/login']);
    }
  }
  
  returnHome() {
    this.isSidebarActive = false;
    this.router.navigate(['/home']);
  }

  activeMenu() {
    this.isSidebarActive = !this.isSidebarActive;
    console.log('Sidebar active state:', this.isSidebarActive); // 打印状态
  }

  
}

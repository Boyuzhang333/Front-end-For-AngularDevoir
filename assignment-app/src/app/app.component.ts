import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AssignmentListComponent } from './assignment-list/assignment-list.component'; // 导入子组件
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from './models/auth.service';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
            AssignmentListComponent,
            RouterModule,
            MatSlideToggleModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'assignment-app-devoir';


  constructor(public authService: AuthService, private router: Router) {}

  toggleLogin() {
    if (this.authService.loggedIn) {
      this.authService.logOut(); // 执行登出
      this.router.navigate(['/list']); // 登出后跳转到列表页面
    } else {
      this.authService.logIn(); // 执行登录
    }
  }
}

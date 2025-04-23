import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./core/components/navbar/navbar.component";
import { UserComponent } from "./features/user/containers/user.component";
import { TaskComponent } from "./features/task/containers/task.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, UserComponent, TaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular_udemy_cours';
  selectedUserId?: string;
}

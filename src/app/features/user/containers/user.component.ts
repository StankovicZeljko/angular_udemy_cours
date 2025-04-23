import { Component } from '@angular/core';
import { User } from '../../../core/models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  users: User[] = [];

  constructor (private userService: UserService){}

  ngOnInit():void{
    this.userService.getUsers().subscribe( data => {
      this.users = data;
    })
  }

}

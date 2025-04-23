import { Component, EventEmitter, Output } from '@angular/core';
import { User } from '../../../core/models/user.model';
import { CommonModule } from '@angular/common';
import { UserService } from '../services/user.service';
import { UserItemComponent } from "../components/user-item/user-item.component";

@Component({
  selector: 'app-user',
  imports: [UserItemComponent, CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  users: User[] = [];
  @Output() userSelected = new EventEmitter<string>();

  constructor (private userService: UserService){}

  ngOnInit():void{
    this.userService.getUsers().subscribe( data => {
      this.users = data;
      console.log(data)
    })
  }

  onUserClicked(id:string) {
    this.userSelected.emit(id);
  }

}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../../../core/models/user.model';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-user-item',
  imports: [MatButtonModule],
  templateUrl: './user-item.component.html',
  styleUrl: './user-item.component.scss'
})
export class UserItemComponent {
  @Input() user!: User;
  @Output() selected = new EventEmitter<string>();

  onSelect(){
    this.selected.emit(this.user.id);
  }
}

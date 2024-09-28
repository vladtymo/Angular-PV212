import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IUser } from '../user';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {

  @Input()
  user?: IUser;

  @Output()
  onDelete = new EventEmitter<number>();

  remove() {
    // how to remove? - No
    this.onDelete.emit(this.user?.id);
  }

  changeRole() {
    if (this.user)
      this.user.role = (this.user?.role === "Admin" ? "User" : "Admin");
  }
}

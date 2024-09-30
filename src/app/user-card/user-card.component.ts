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

  // вхідний параметр, який передається сюди від зовнішнього компонента
  @Input()
  user?: IUser;

  // вихідний параметр події, на яку можна повісити обробник в зовнішньму компоненті
  @Output()
  onDelete = new EventEmitter<number>();

  remove() {
    // можемо видалити тут? - Ні
    // генеруємо подію видалення
    this.onDelete.emit(this.user?.id);
  }

  changeRole() {
    if (this.user)
      this.user.username = (this.user?.username === "Admin" ? "User" : "Admin");
  }
}

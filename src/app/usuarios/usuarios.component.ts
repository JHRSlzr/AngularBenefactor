import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { isBuffer } from 'util';
import { IUser } from '../app.component';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  @Input() User : IUser;
  @Output() outUser: EventEmitter<IUser> = new EventEmitter<IUser>()

  constructor() { }

  ngOnInit(): void {
  }

  onSendData() : void {
    this.outUser.emit(this.User)
  }

  onShowUser(): boolean {
    return Number(this.User.id) % 2 === 1;
  }
}

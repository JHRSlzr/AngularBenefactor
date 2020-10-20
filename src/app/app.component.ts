import { Component } from '@angular/core';

export interface IUser {
  id: number;
  name: string;
  descripcion: string;
  imagen: string;

}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PracticaBenefactor';
  usuarios: IUser[] = [
    {id:1, name:'Nenuko', descripcion:'hola', imagen: '../assets/imagen/Hamster.jpg'},
    {id:2, name:'Jorge', descripcion:'k ase', imagen: '../assets/imagen/michi.png'},
    {id:3, name:'Hernan', descripcion:'k rollo', imagen: '../assets/imagen/nezquik.jpg'},
    {id:4, name:'Artaban', descripcion:'k tal', imagen: '../assets/imagen/perron.jpg'},
    {id:5, name:'Charlito', descripcion:'nose', imagen: '../assets/imagen/skubi.png'}
  ]
  constructor() {}
  outUserMethod(user: IUser): void {
    console.log((user.id)+","+ (user.name))
  }
}



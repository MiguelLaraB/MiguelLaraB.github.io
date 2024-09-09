import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-interests',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './interests.component.html',
  styleUrl: './interests.component.css'
})
export class InterestsComponent {
interests : Array<any> = [];
ngOnInit() : void {
  let interests={
    interest: "Videojuegos | Escuchar música | Leer | Cocinar | Diseñar páginas web"
  };

  this.interests.push(interests);
  console.log(this.interests)
}
}

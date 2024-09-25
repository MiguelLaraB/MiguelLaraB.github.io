import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-achievements',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './achievements.component.html',
  styleUrl: './achievements.component.css'
})
export class AchievementsComponent {
  achievements : Array<any> = [];
  ngOnInit(): void {
    let achievements = {
      achievement: "Página web de logros de videojuegos"
    };

    let achievements1={
      achievement: "Platino de Fallout New Vegas"
    }

    this.achievements.push(achievements);
    this.achievements.push(achievements1);
    console.log(this.achievements)
  }

}

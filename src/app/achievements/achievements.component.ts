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
      achievement: "Ninguno"
    };

    this.achievements.push(achievements);
    console.log(this.achievements)
  }

}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
skills : Array<any> = [];
ngOnInit(): void {
  let skillss = {

    skill1: "Good critical tought, ",
    skill2: "Future focused, ",
    skill3: "Persistence, ",
    skill4: "Web design",
  };

  this.skills.push(skillss);
  console.log(this.skills)
}
}

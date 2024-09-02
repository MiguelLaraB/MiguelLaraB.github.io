import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  education : Array<any> = [];
  ngOnInit(): void {
    let school1 = {
      generation: "2017-2020",
      career: "programming",
      school: "CBTIS No.42",
    };

    let school2 = {
      generation: "2022-In progress",
      career: "Software Engineering",
      school: "Universidad Veracruzana",
    };

    this.education.push(school1);
    this.education.push(school2);
    console.log(this.education)
  }

}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-languages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './languages.component.html',
  styleUrl: './languages.component.css'
})
export class LanguagesComponent {
  languages : Array<any> = [];
  ngOnInit(): void {
    let languageEs= {
       language: "Español",
    };

    let languageEn= {
      language1: "Inglés"
    };

    this.languages.push(languageEs);
    this.languages.push(languageEn);
    console.log(this.languages)
  }

}

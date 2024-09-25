import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.css'
})
export class WorkExperienceComponent {
  workExperience : Array<any> = [];
  ngOnInit(): void {
    let work1 = {
      fecha: "2024-2024",
      ubicacion: "Ixtac Ver. ",
      puesto: "Estudiante",
      empresa: "UV",
      logros: [
        { descripcion : "Creación de página web de logros"},
        { descripcion: "Conexión y consumo de la API de Steam"}
      ]
    };

    let work2 = {
      fecha: "2024-2024",
      ubicacion: "Orizaba, Ver. ",
      puesto: "Estudiante",
      empresa: "UV",
      logros: [
        { descripcion : "Creación de página web de economía"},
        { descripcion: "Creación de diagramas de casos de uso"}
      ]
    };

    this.workExperience.push(work1);
    this.workExperience.push(work2);
    console.log(this.workExperience)
  }

}

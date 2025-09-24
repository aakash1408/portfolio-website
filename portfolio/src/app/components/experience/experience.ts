import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [NgFor],
  templateUrl: './experience.html',
  styleUrls: ['./experience.css']
})
export class Experience {
  experiences = [
    {
      role: 'Summer Intern',
      company: 'CSRBOX, Remote',
      period: 'July - August 2024'
    },
    {
      role: 'Research Intern',
      company: 'Guru Gobind Singh Indraprastha University, Delhi',
      period: 'Jan - July 2025'
    },
    {
      role: 'Associate DevOps Engineer',
      company: 'Biz2x, Noida',
      period: 'Sept 2025 - Present'
    }
  ];
}

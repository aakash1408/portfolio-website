import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  githubLink: string;
}

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
  projects: Project[] = [
    {
      title: 'Cloud-Native DevOps Pipeline for OpenTelemetry Demo',
      description: 'DevOpsified a multi-language microservices project with full CI/CD, container orchestration, and cloud deployment.',
      imageUrl: 'https://tse4.mm.bing.net/th/id/OIP.SLegsIMb8bUYNLcgXFAbcAHaEH?rs=1&pid=ImgDetMain&o=7&rm=3',
      githubLink: 'https://github.com/aakash1408/opentelemetry-demo'
    },
    {
      title: 'CI/CD Pipeline Implementation',
      description: 'Implemented a CI/CD pipeline using Jenkins for a note-taking app, automating build, test, and deployment processes.',
      imageUrl: 'https://media.geeksforgeeks.org/wp-content/uploads/20230410112114/DevOps.png',
      githubLink: 'https://github.com/aakash1408/TakeNote'
    },
    {
      title: 'AWS EKS with ALB Configuration',
      description: 'Deployed an application on Amazon EKS, configured an Application Load Balancer (ALB) to enable external access.',
      imageUrl: 'https://th.bing.com/th/id/OIP.neG4D9C8UcJvNn6bverfIAHaEK?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3',
      githubLink: 'https://github.com/aakash1408/eksProject'
    }
  ];
}

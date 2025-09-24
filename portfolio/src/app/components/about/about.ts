import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
  downloadCV() {
    const link = document.createElement('a');
    link.href = 'https://raw.githubusercontent.com/aakash1408/portfolio-website/main/Aakash_Chauhan_CV.pdf';
    link.download = 'Aakash_Chauhan_CV.pdf';
    link.click();
  }
}

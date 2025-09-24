import { Component } from '@angular/core';
import { Navbar } from '../../navbar/navbar';
import { Home } from '../home/home';
import { About } from '../about/about';
import { Projects } from '../projects/projects';
import { Contact } from '../contact/contact';
import { Footer } from '../../footer/footer';
import { Experience } from '../experience/experience';

@Component({
  selector: 'app-main',
  imports: [Navbar, Home, About, Projects, Experience, Contact, Footer],
  templateUrl: './main.html',
  styleUrl: './main.css'
})
export class Main {

}

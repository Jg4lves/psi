import { Component, signal } from '@angular/core';
import { Hero } from './hero/hero';
import { Background } from './shared/background/background';
import { Identificacao } from './identificacao/identificacao';
import { Sobre } from './sobre/sobre';
import { Local } from './local/local';
import { Insta } from './insta/insta';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Hero, Background, Identificacao, Sobre, Local, Insta, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('psi');
}

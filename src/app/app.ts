import { Component, signal } from '@angular/core';
import { Hero } from './hero/hero';
import { Background } from './shared/background/background';
import { Identificacao } from './identificacao/identificacao';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Hero, Background, Identificacao],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('psi');
}

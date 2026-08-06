import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hero } from './hero/hero';
import { Background } from './shared/background/background';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Hero, Background],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('psi');
}

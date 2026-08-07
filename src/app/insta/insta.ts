import {
  Component,
  ElementRef,
  AfterViewInit,
  ViewChild
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-insta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './insta.html',
  styleUrl: './insta.css',
})
export class Insta  implements AfterViewInit {
  @ViewChild('instagramSection') instagramSection!: ElementRef;

  igVisible = false;

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.igVisible = true;
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (this.instagramSection) {
      observer.observe(this.instagramSection.nativeElement);
    }
  }
}
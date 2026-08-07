import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-local',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './local.html',
  styleUrl: './local.css',
})
export class Local {
  @ViewChild('appointmentSection') appointmentSection!: ElementRef;

  sectionVisible = false;

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.sectionVisible = true;
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );

    if (this.appointmentSection) {
      observer.observe(this.appointmentSection.nativeElement);
    }
  }
}

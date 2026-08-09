import { Component, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer implements AfterViewInit, OnDestroy {

  currentYear = new Date().getFullYear();

  private readonly scrollThreshold = 400;

  showBackToTop = false;

  ngAfterViewInit(): void {
    window.addEventListener('scroll', this.handleScroll, { passive: true });
    this.handleScroll();
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.handleScroll);
  }

  private handleScroll = (): void => {
    this.showBackToTop = window.scrollY > this.scrollThreshold;
  };

  backToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  async subscribe(email: string): Promise<void> {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email.trim())) {
      throw new Error('Digite um e-mail válido.');
    }

    await new Promise<void>((resolve) => {
      setTimeout(resolve, 900);
    });
  }
}


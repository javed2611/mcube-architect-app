import { Component } from '@angular/core';
@Component({ 
  selector: 'app-header', 
  standalone: true, 
  template: `
    <header class="nav">
      <button class="brand" (click)="scrollTo('top')" aria-label="Mcube Architects and Consultants home">
        <span>MCUBE</span>
        <i></i>
        <span>ARCHITECTS &amp; CONSULTANTS</span>
      </button>
      <button class="menu-toggle" (click)="toggleMenu()" type="button" [class.active]="menuOpen">
        <span class="menu-icon">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>
      <nav [class.open]="menuOpen">
        <div class="nav-overlay" (click)="menuOpen = false"></div>
        <div class="nav-menu">
          <button type="button" class="nav-link" (click)="handleNavClick('work')">
            <span class="link-text">Work</span>
            <span class="link-arrow">→</span>
          </button>
          <button type="button" class="nav-link" (click)="handleNavClick('studio')">
            <span class="link-text">Studio</span>
            <span class="link-arrow">→</span>
          </button>
          <button type="button" class="nav-link" (click)="handleNavClick('contact')">
            <span class="link-text">Contact</span>
            <span class="link-arrow">→</span>
          </button>
        </div>
      </nav>
    </header>
  `, 
  styleUrl: './app.component.scss' 
})
export class HeaderComponent { 
  menuOpen = false; 
  
  toggleMenu() { 
    this.menuOpen = !this.menuOpen; 
  }
  
  handleNavClick(id: string) {
    this.scrollTo(id);
  }
  
  scrollTo(id: string) { 
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      this.menuOpen = false;
    }, 50);
  } 
}

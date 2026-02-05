import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header-section',
  standalone: true,
  templateUrl: './header-section.component.html',
  styleUrl: './header-section.component.scss'
})
export class HeaderSectionComponent {
  menuOpen = signal(false);
  themeTwo = signal(false);

  toggleMenu(): void {
    this.menuOpen.update((value) => !value);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  toggleTheme(): void {
    this.themeTwo.update((value) => !value);
    document.body.classList.toggle('theme-2', this.themeTwo());
  }
}

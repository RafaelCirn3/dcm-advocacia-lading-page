import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header-section',
  standalone: true,
  templateUrl: './header-section.component.html',
  styleUrl: './header-section.component.scss'
})
export class HeaderSectionComponent {
  menuOpen = signal(false);

  toggleMenu(): void {
    this.menuOpen.update((value) => !value);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}

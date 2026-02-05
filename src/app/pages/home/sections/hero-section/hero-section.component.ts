import { Component } from '@angular/core';
import { CONTACT_LINKS } from '../../../../shared/contact-links';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {
  whatsappLink = CONTACT_LINKS.whatsapp;
}

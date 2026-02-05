import { Component } from '@angular/core';
import { CONTACT_LINKS } from '../contact-links';

@Component({
  selector: 'app-whatsapp-fab',
  standalone: true,
  templateUrl: './whatsapp-fab.component.html',
  styleUrl: './whatsapp-fab.component.scss'
})
export class WhatsappFabComponent {
  whatsappLink = CONTACT_LINKS.whatsapp;
}

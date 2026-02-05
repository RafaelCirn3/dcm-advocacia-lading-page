import { Component, inject, signal } from '@angular/core';
import { NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { SectionTitleComponent } from '../../../../shared/section-title/section-title.component';
import { CONTACT_API_URL, CONTACT_LINKS } from '../../../../shared/contact-links';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [NgIf, SectionTitleComponent],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.scss'
})
export class ContactSectionComponent {
  private http = inject(HttpClient);
  submitted = signal(false);
  submitting = signal(false);
  error = signal('');
  emailLink = `mailto:${CONTACT_LINKS.email}`;
  emailText = CONTACT_LINKS.email;

  onSubmit(event: Event): void {
    event.preventDefault();
    const form = event.target as HTMLFormElement | null;
    if (!form) {
      return;
    }

    const data = new FormData(form);
    const payload = {
      name: String(data.get('name') || ''),
      email: String(data.get('email') || ''),
      phone: String(data.get('phone') || ''),
      message: String(data.get('message') || '')
    };

    this.error.set('');
    this.submitting.set(true);

    this.http.post(CONTACT_API_URL, payload).subscribe({
      next: () => {
        this.submitting.set(false);
        this.submitted.set(true);
        form.reset();
      },
      error: () => {
        this.submitting.set(false);
        this.error.set('Nao foi possivel enviar. Tente novamente.');
      }
    });
  }
}

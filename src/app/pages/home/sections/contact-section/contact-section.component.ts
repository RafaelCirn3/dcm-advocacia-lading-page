import { Component, signal } from '@angular/core';
import { NgIf } from '@angular/common';
import { SectionTitleComponent } from '../../../../shared/section-title/section-title.component';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [NgIf, SectionTitleComponent],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.scss'
})
export class ContactSectionComponent {
  submitted = signal(false);

  onSubmit(event: Event): void {
    event.preventDefault();
    this.submitted.set(true);
  }
}

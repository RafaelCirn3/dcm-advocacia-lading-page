import { Component } from '@angular/core';
import { SectionTitleComponent } from '../../../../shared/section-title/section-title.component';

@Component({
  selector: 'app-testimonials-section',
  standalone: true,
  imports: [SectionTitleComponent],
  templateUrl: './testimonials-section.component.html',
  styleUrl: './testimonials-section.component.scss'
})
export class TestimonialsSectionComponent {}

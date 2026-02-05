import { Component } from '@angular/core';
import { SectionTitleComponent } from '../../../../shared/section-title/section-title.component';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [SectionTitleComponent],
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.scss'
})
export class AboutSectionComponent {}

import { Component } from '@angular/core';
import { SectionTitleComponent } from '../../../../shared/section-title/section-title.component';

@Component({
  selector: 'app-differentials-section',
  standalone: true,
  imports: [SectionTitleComponent],
  templateUrl: './differentials-section.component.html',
  styleUrl: './differentials-section.component.scss'
})
export class DifferentialsSectionComponent {}

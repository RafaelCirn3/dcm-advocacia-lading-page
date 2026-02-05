import { Component } from '@angular/core';
import { HeaderSectionComponent } from './sections/header-section/header-section.component';
import { HeroSectionComponent } from './sections/hero-section/hero-section.component';
import { AboutSectionComponent } from './sections/about-section/about-section.component';
import { AreasCarouselComponent } from './sections/areas-carousel/areas-carousel.component';
import { DifferentialsSectionComponent } from './sections/differentials-section/differentials-section.component';
import { TestimonialsSectionComponent } from './sections/testimonials-section/testimonials-section.component';
import { ContactSectionComponent } from './sections/contact-section/contact-section.component';
import { FooterSectionComponent } from './sections/footer-section/footer-section.component';
import { WhatsappFabComponent } from '../../shared/whatsapp-fab/whatsapp-fab.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderSectionComponent,
    HeroSectionComponent,
    AboutSectionComponent,
    AreasCarouselComponent,
    DifferentialsSectionComponent,
    TestimonialsSectionComponent,
    ContactSectionComponent,
    FooterSectionComponent,
    WhatsappFabComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {}

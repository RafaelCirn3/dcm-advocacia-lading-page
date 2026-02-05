import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  ViewChild,
  computed,
  signal
} from '@angular/core';
import { NgFor } from '@angular/common';
import { SectionTitleComponent } from '../../../../shared/section-title/section-title.component';

interface AreaItem {
  title: string;
  description: string;
}

@Component({
  selector: 'app-areas-carousel',
  standalone: true,
  imports: [NgFor, SectionTitleComponent],
  templateUrl: './areas-carousel.component.html',
  styleUrl: './areas-carousel.component.scss'
})
export class AreasCarouselComponent implements AfterViewInit {
  @ViewChild('track', { static: true }) track!: ElementRef<HTMLDivElement>;

  areas: AreaItem[] = [
    { title: 'Bancario', description: 'Resumo curto e direto sobre a atuacao.' },
    { title: 'Civil', description: 'Descricao placeholder sobre demandas civis.' },
    {
      title: 'Empresarial',
      description: 'Texto breve sobre consultoria para empresas.'
    },
    {
      title: 'Imobiliario',
      description: 'Atendimento estrategico para negocios imobiliarios.'
    },
    {
      title: 'Consumidor',
      description: 'Defesa de direitos com linguagem clara e objetiva.'
    },
    {
      title: 'Contratos',
      description: 'Estrutura e revisao contratual com foco em seguranca.'
    },
    {
      title: 'Trabalhista',
      description: 'Suporte juridico em relacoes de trabalho.'
    },
    {
      title: 'Publico',
      description: 'Atuacao em demandas com setor publico.'
    }
  ];

  activeIndex = signal(0);
  pageCount = signal(1);

  indicators = computed(() =>
    Array.from({ length: this.pageCount() }, (_, index) => index)
  );

  private scrollRaf = 0;

  ngAfterViewInit(): void {
    this.updatePagination();
  }

  @HostListener('window:resize')
  onResize(): void {
    this.updatePagination();
  }

  onScroll(): void {
    if (this.scrollRaf) {
      return;
    }

    this.scrollRaf = window.requestAnimationFrame(() => {
      this.updateActiveIndex();
      this.scrollRaf = 0;
    });
  }

  prev(): void {
    const nextIndex = Math.max(0, this.activeIndex() - 1);
    this.scrollToIndex(nextIndex);
  }

  next(): void {
    const nextIndex = Math.min(this.pageCount() - 1, this.activeIndex() + 1);
    this.scrollToIndex(nextIndex);
  }

  scrollToIndex(index: number): void {
    const track = this.track.nativeElement;
    track.scrollTo({
      left: index * track.clientWidth,
      behavior: 'smooth'
    });
    this.activeIndex.set(index);
  }

  onKeydown(event: KeyboardEvent): void {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      this.prev();
      return;
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault();
      this.next();
      return;
    }

    if (event.key === 'Home') {
      event.preventDefault();
      this.scrollToIndex(0);
      return;
    }

    if (event.key === 'End') {
      event.preventDefault();
      this.scrollToIndex(this.pageCount() - 1);
    }
  }

  private updatePagination(): void {
    const track = this.track.nativeElement;
    const count = Math.max(1, Math.round(track.scrollWidth / track.clientWidth));
    this.pageCount.set(count);
    this.activeIndex.set(Math.min(this.activeIndex(), count - 1));
  }

  private updateActiveIndex(): void {
    const track = this.track.nativeElement;
    const index = Math.round(track.scrollLeft / track.clientWidth);
    this.activeIndex.set(Math.max(0, Math.min(index, this.pageCount() - 1)));
  }
}

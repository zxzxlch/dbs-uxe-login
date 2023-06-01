import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-line-wave-anim',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="anim-container">
      <div class="anim-wrapper">
        <div
          *ngFor="let attrs of _shapeAttrs; let i = index"
          [style.animation-delay.s]="attrs['animationDelay']"
          [style.transform]="attrs['transform']"
          class="shape"
        ></div>
      </div>
    </div>
  `,
  styleUrls: ['./line-wave-anim.component.css'],
})
export class LineWaveAnimComponent {
  _shapeAttrs: Array<{ [key: string]: string }>;

  constructor() {
    this._shapeAttrs = Array.from({ length: 12 }, (_, i) => {
      const animationDelay = String(-i * 1.8 - 40);
      const scaleFactor = Math.pow(0.7, i + 1);
      const transform = `translate(-50%, -50%) scale(${scaleFactor})`;
      return { animationDelay, transform };
    });
  }
}

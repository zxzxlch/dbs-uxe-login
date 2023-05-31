import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: [
    `
      a {
        color: var(--color-gray-100);
      }
      .nav-links ul li + li {
        margin-top: var(--spacing-4);
      }
    `,
  ],
})
export class FooterComponent {
  @Input() siteName: string = 'DBS Singapore';
}

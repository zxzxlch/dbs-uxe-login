import { Component, ContentChild, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ButtonContentDirective } from '../button-content.directive';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="{{ variant }}">
      <ng-container
        *ngIf="customContent; else defaultTemplate"
        [ngTemplateOutlet]="content.templateRef"
      ></ng-container>
      <ng-template #defaultTemplate>
        <input type="button" class="button" value="label" />
      </ng-template>
    </div>
  `,
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() label: string = '';
  @Input() customContent: boolean = false;
  @Input() variant: 'primary' | 'secondary' = 'primary';
  @ContentChild(ButtonContentDirective) content!: ButtonContentDirective;

  constructor() {}
}

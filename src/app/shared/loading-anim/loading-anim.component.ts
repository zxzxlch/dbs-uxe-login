import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loading-anim',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="anim-container">
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
    </div>
  `,
  styleUrls: ['./loading-anim.component.css']
})
export class LoadingAnimComponent {
  
}

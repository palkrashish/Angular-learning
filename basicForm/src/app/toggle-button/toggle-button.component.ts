import { Component } from '@angular/core';
import { NgbProgressbarModule  } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-toggle-button',
  standalone: true,
  imports: [NgbProgressbarModule],
  templateUrl: './toggle-button.component.html',
  styleUrl: './toggle-button.component.css',
})
export class ToggleButtonComponent {
  // active = 1;
  display = true;
  Toggle() {
    console.log('hello');
    this.display = !this.display;
  }
}

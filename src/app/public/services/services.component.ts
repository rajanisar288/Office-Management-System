import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent {
  mouseX: number = 0;
  mouseY: number = 0;
  offset: number = 20;
  offset2: number = -60;
  offset3: number = 100;
  constructor() {}

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.mouseX = event.clientX;
    this.mouseY = event.clientY;
  }
}

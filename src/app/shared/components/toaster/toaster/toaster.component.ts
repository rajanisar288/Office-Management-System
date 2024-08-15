import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  Renderer2,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { UtilityService } from 'src/app/shared/services/utility.service';

@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.scss'],
})
export class ToasterComponent implements OnInit, OnDestroy {
  subscription: Subscription = new Subscription();
  toasterCounter: number = 1;
  currentToaster: number = 0;
  private intervalId: any;
  constructor(
    private _utilityService: UtilityService,
    private elRef: ElementRef,
    private renderer: Renderer2
  ) {
    this.subscription = this._utilityService.toaster$.subscribe((toast) => {
      this.createToastElement(toast.message, toast.type);
    });
  }

  ngOnInit(): void {
    this.startInterval();
  }

  private createToastElement(message: string, type: string) {
    const toastElement = this.renderer.createElement('p');
    const container =
      this.elRef.nativeElement.querySelector('#toaster-container');

    // Set the text and class for the toast element
    this.renderer.setProperty(toastElement, 'innerText', message);
    this.renderer.addClass(toastElement, 'toaster');
    this.renderer.addClass(toastElement, type);
    this.renderer.addClass(toastElement, `toaster${this.toasterCounter}`);
    this.renderer.appendChild(container, toastElement);
    this.currentToaster = this.toasterCounter;
    this.toasterCounter++;

    // setTimeout(() => {
    //   this.renderer.addClass(toastElement, 'fade-out');
    // }, 2700);
  }

  startInterval(): void {
    this.intervalId = setInterval(() => {
      console.log('thisss', this.currentToaster);
      this.executeFunction();
    }, 3000);
  }

  executeFunction(): void {
    const container =
      this.elRef.nativeElement.querySelector('#toaster-container');
    const el = this.elRef.nativeElement.querySelector(
      `.toaster${this.toasterCounter}`
    );

    if (el) {
      this.renderer.removeChild(container, el);
      this.currentToaster--;
    }
  }

  clearInterval(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  ngOnDestroy(): void {
    this.clearInterval();
    this.subscription.unsubscribe();
  }
}

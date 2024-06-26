import {
  Component,
  EventEmitter,
  Input,
  Output,
  Inject,
  AfterViewInit,
  HostListener,
} from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'io-dropdown',
  templateUrl: './io-dropdown.component.html',
  styleUrls: ['./io-dropdown.component.scss'],
})
export class IoDropdownComponent implements AfterViewInit {
  @Output('value') getValue = new EventEmitter<any>();
  @Input('defaultValue') defaultSelect: any;
  isDropdownCollapse = false;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  getDropDownValue(val: any) {
    if (this.isDropdownCollapse === true) {
      this.getValue.emit(val.innerHTML);
      this.defaultSelect = val.innerHTML;
      this.isDropdownCollapse = false;
    }
  }

  hideShowDropdown() {
    this.isDropdownCollapse = !this.isDropdownCollapse;
  }

  @HostListener('document:click', ['$event'])
  clickOutside(event: Event) {
    if (!(event.target as HTMLElement).closest('.dropdownDefault')) {
      this.isDropdownCollapse = false;
    }
  }

  ngAfterViewInit(): void {
    const dropdownElement = this.document.getElementById('dropdownElement');
    if (dropdownElement) {
      Array.from(dropdownElement.children).forEach((child) => {
        child.addEventListener('click', (event) =>
          this.getDropDownValue(event.target)
        );
      });
    }
  }
}

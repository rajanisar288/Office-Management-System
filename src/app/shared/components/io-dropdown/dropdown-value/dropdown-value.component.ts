import { Component, Input } from '@angular/core';

@Component({
  selector: 'io-dropdown-value',
  templateUrl: './dropdown-value.component.html',
  styleUrls: ['./dropdown-value.component.scss']
})
export class DropdownValueComponent {
  @Input('value') dropdownValue:any
  dropdown:any

  constructor(){
    this.dropdown = this.dropdownValue
  }

}

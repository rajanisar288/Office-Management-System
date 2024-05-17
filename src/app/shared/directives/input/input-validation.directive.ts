import { Directive, ElementRef, Inject, Input } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Directive({
  selector: 'input[type=text]'
})


export class InputValidationDirective {

  constructor(private _eleRef: ElementRef, @Inject(DOCUMENT) private document: Document) {
    this.inputTextValidation()
  }


  private inputTextValidation() {
    const input = this._eleRef.nativeElement as HTMLInputElement

    input.addEventListener('keyup', function (el) {
      if (input.value == '') {
        input.parentElement?.classList.add('inValid')
        input.classList.add('inValidInput')
        input.classList.remove('validInput')
        input.parentElement?.classList.remove('charactorValidation')
        
      }
     else if(input.value.length < 4){
        input.parentElement?.classList.add('charactorValidation')
        input.classList.add('inValidInput')
      }
      else {
        input.classList.add('validInput')
        input.classList.remove('inValidInput')
        input.parentElement?.classList.remove('inValid')
        input.parentElement?.classList.remove('charactorValidation')
      }
    });
    input.addEventListener('change', () => {
      if (input.value == '') {
        input.classList.add('inValidInput')
      }else if(input.value.length < 4){
        input.parentElement?.classList.add('charactorValidation')
        input.classList.add('inValidInput')
      }
      else {
        input.classList.remove('inValidInput')
        input.classList.remove('validInput')
        input.parentElement?.classList.remove('charactorValidation')
      }
    })



  }




}




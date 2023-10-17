import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: 'input[type=text]'
})
export class InputValidationDirective {

  constructor(private  _eleRef:ElementRef) { 
    this.inputTextValidation()
  }
  private inputTextValidation(){
    const input = this._eleRef.nativeElement as HTMLInputElement
    console.log(this._eleRef.nativeElement.value)
    input.addEventListener('keyup' , ()=>{
      if(input.value == ''){
        input.classList.add('inValidInput')
        input.classList.remove('validInput')
      }else{
        input.classList.add('validInput')
        input.classList.remove('inValidInput')
      }
    });
    input.addEventListener('change', ()=>{
      if(input.value ==''){
        input.classList.add('inValidInput')
      }
      else{
        input.classList.remove('inValidInput')
        input.classList.remove('validInput')
      }
    })

  }

}

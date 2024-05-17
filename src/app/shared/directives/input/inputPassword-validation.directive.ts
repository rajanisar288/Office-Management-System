import { Directive, ElementRef, Inject, Input, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Directive({
  selector: 'input[type=password]'
})
export class InputPasswordValidationDirective {
  @Input() showPasswordButton: boolean = true; // You can customize this input as needed
  iconClass:any = 'fa-eye'

  constructor(private _eleRef: ElementRef, @Inject(DOCUMENT) private document: Document, private renderer: Renderer2) {
    this.inputPasswordValidation();
  }

  private inputPasswordValidation() {
    const input = this._eleRef.nativeElement as HTMLInputElement;

    // Create a button to toggle password visibility
    if (this.showPasswordButton) {
      const toggleButton = this.renderer.createElement('button');
      toggleButton.classList.add('passwordViewer')
      this.renderer.setProperty(toggleButton, 'textContent', '')
      this.renderer.addClass(toggleButton, 'fa-regular');
      toggleButton.classList.add(this.iconClass);
      this.renderer.setStyle(toggleButton, 'cursor', 'pointer');
        console.log(this.iconClass)
      // Attach event listener to toggle button
      this.renderer.listen(toggleButton, 'click', () => {
        this.togglePasswordVisibility(input , toggleButton);
        
      });

      // Append the toggle button after the password input
      this.renderer.appendChild(this._eleRef.nativeElement.parentNode, toggleButton);
    }
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

  private togglePasswordVisibility(input: HTMLInputElement, button:HTMLButtonElement) {
    // Toggle the password input type between 'password' and 'text'
    const currentType = input.type === 'password' ? 'text' : 'password';
    const iconClass1 = input.type === 'password' ? 'fa-eye-slash' : 'fa-eye';
    button.classList.remove(this.iconClass)
    button.classList.add(iconClass1)
    this.renderer.setProperty(input, 'type', currentType);
    return iconClass1
  }
}




   





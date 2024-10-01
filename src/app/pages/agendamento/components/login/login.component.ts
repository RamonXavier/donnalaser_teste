import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  vcode: string[] = ['', '', '', '']; // Array para armazenar os valores dos inputs

  processInput(event: KeyboardEvent, index: number) {
    const keyCode = event.keyCode || event.which;

    // Verifica se é uma tecla de backspace ou delete
    if ((keyCode === 8 || keyCode === 46) && this.vcode[index] === '') {
      if (index > 0) {
        const prevInput = document.querySelectorAll('.vcode-input')[index - 1] as HTMLInputElement;
        prevInput.focus();
      }
    } else if (this.vcode[index].length === 1) {
      const nextInput = document.querySelectorAll('.vcode-input')[index + 1] as HTMLInputElement;
      if (nextInput) {
        nextInput.focus();
      }
    }
  }

  verifyCode() {
    const enteredCode = this.vcode.join('');
    console.log('Entered code:', enteredCode);
    // Aqui você pode implementar a lógica de verificação do código inserido
  }
}

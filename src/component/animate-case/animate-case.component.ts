import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animate-case',
  standalone: true,
  imports: [],
  templateUrl: './animate-case.component.html',
  styleUrl: './animate-case.component.scss',
})
export class AnimateCaseComponent implements OnInit {
  text: string = '';
  input: string = 'Freelancer';
  ready: boolean = true;

  ngOnInit(): void {
    this.animateStart();
  }

  animateStart() {
    if (this.ready) {
      for (let i = 0; i < this.input.length; i++) {
        setTimeout(() => {
          this.text += this.input[i];
          if (this.input.length - 1 == i) this.removeLastCharacter();
        }, i * 170);
      }
      this.ready = false;
    }
  }

  removeLastCharacter() {
    setTimeout(() => {
      for (let i = 0; i < this.input.length; i++) {
        setTimeout(() => {
          this.text = this.text.slice(0, -1);
          if (this.input.length - 1 == i) this.ready = true;
        }, i * 170);
      }
    }, 700);
  }
}

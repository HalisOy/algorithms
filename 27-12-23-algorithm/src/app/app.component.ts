import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = '27-12-23-algorithm';

  UserA:number=0
  UserB:number=0

  UserArrayA:number[]=[]
  UserArrayB:number[]=[]
  addArrayA(){
    this.UserArrayA.push(this.UserA);
  }
  addArrayB(){
    this.UserArrayB.push(this.UserB);
  }

  userCompare(){
    if(this.UserArrayA.length!=this.UserArrayB.length) return "Lütfen eşit sayı girin";
    let userAPoint = 0;
    let userBPoint = 0;
    for (let i = 0; i < this.UserArrayA.length; i++) {
      if(this.UserArrayA[i]>this.UserArrayB[i]) userAPoint++;
      else if (this.UserArrayA[i]<this.UserArrayB[i]) userBPoint++;
    }
    return [userAPoint,userBPoint]
  }

  matrisNumber:number = 0;

  matrisArrayFirst:number[]=[]
  matrisArraySecond:number[]=[]
  matrisArrayThird:number[]=[]
  addMatrisArray(){
    if(this.matrisArrayFirst.length < 3)
    {
      this.matrisArrayFirst.push(this.matrisNumber);
    }
    else if(this.matrisArraySecond.length < 3)
    {
      this.matrisArraySecond.push(this.matrisNumber);
    }
    else if(this.matrisArrayThird.length < 3)
    {
      this.matrisArrayThird.push(this.matrisNumber);
    }
  }

  matrisSum(){
    if(this.matrisArrayFirst.length < 3 || this.matrisArraySecond.length < 3 || this.matrisArrayThird.length < 3) return "Yeterli sayı girilmedi!";
    
    let total = 0;
    total += this.matrisArrayFirst[0]+this.matrisArraySecond[1]+this.matrisArrayThird[2];
    total += this.matrisArrayFirst[2]+this.matrisArraySecond[1]+this.matrisArrayThird[0]
    return total;
  }
}

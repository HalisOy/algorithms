import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'algorithms';
  day:number=0;

  questArr:number[]=[]
  setNewDay(){
    this.questArr=[]
    for (let i = 0; i < this.day; i++) {
      this.questArr.push(3)
      for (let j = 0; j < i; j++) {
        this.questArr[j]+=2;
      }
    } 
    return this.questArr
  }

  num:number=0;
  numArray:number[]=[]
  addNumArray(){
    this.numArray.push(this.num);
  }
  getBigNumIndex(){
    let bigNum=0;
    let bigNumIndex;
    for (let i = 0; i < this.numArray.length; i++) {
      bigNum = bigNum > this.numArray[i] ? bigNum : this.numArray[i];
      bigNumIndex = bigNum > this.numArray[i] ? bigNumIndex : i;
    }
    return [bigNum,bigNumIndex]
  }

  similarNum:number=0
  similarArray:number[]=[]
  addSimilarArray(){
    this.similarArray.push(this.similarNum)
  }
  similarNumbers(){
    let lastNumbers=0;
    let lastNumberCounter=0;
    let similarNumbers=[]

    for (let i = 0; i < this.similarArray.length; i++) {
      if(lastNumbers == this.similarArray[i])
      {
        lastNumberCounter++;
      }
      else{
        lastNumberCounter=0;
      }
      lastNumbers = this.similarArray[i];
      
      if(lastNumberCounter > 2) 
      {
        lastNumberCounter=0;
        similarNumbers.push(lastNumbers);
      }
    }
    return similarNumbers
  }
}

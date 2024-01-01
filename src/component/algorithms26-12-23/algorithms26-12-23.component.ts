import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-algorithms26-12-23',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './algorithms26-12-23.component.html',
  styleUrl: './algorithms26-12-23.component.scss'
})
export class Algorithms261223Component {
  //--------------------------------------------------- 1
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
  
  //-------------------------------------------------- 2
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

  //------------------------------------------------- 3
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

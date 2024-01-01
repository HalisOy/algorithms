import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-algorithms28-12-23',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './algorithms28-12-23.component.html',
  styleUrl: './algorithms28-12-23.component.scss'
})
export class Algorithms281223Component {
  //----------------------------------------------- 1
  positiveNegativeNumber:number = 0;
  positiveNegativeArray:number[]=[]

  addPositiveNegativeArray(){
    this.positiveNegativeArray.push(this.positiveNegativeNumber);
  }

  PositiveNegativeSum(){
    let negativeTotal=0;
    let positiveTotal=0;

    this.positiveNegativeArray.map(result=>{
      positiveTotal += result > 0 ? result : 0;
      negativeTotal += result < 0 ? result : 0;
    })
    return [positiveTotal,negativeTotal];
  }

  //---------------------------------------------- 2
  powNumber:number = 0;
  powArray:number[]=[];
  addPowArray(){
    this.powArray.push(this.powNumber);
  }

  powSum(){
    if (this.powArray.length%2!=0) return "1 Sayı eksik"
    let total=0;
    for (let i = 0; i < this.powArray.length; i+=2) {
      total+= Math.pow(this.powArray[i],this.powArray[i+1]);
    }
    return total;
  }

  //--------------------------------------------- 3
  aAndBNumber:number = 0;
  arrayA:number[]=[];
  arrayB:number[]=[];

  addArrayA(){
    this.arrayA.push(this.aAndBNumber);
  }
  addArrayB(){
    this.arrayB.push(this.aAndBNumber);
  }

  arrayAandBSum(){
    let totalA = 0;
    let totalB = 0;

    this.arrayA.map(result=> {
      totalA+=result;
    })
    this.arrayB.map(result=> {
      totalB+=result;
    })

    return [totalA,totalB];
  }
}

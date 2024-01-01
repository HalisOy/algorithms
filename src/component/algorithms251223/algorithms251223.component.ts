import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-algorithms251223',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './algorithms251223.component.html',
  styleUrl: './algorithms251223.component.scss'
})
export class Algorithms251223Component {
  //-------------------------------------------- 1
  num:number=0;
  numArray:number[]=[];
  target:number = 0;

  addNumArray(){
    this.numArray.push(this.num);
  }
  addTarget(){
    this.target=this.num;
  }
  twoSum (nums:number[], target:number) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == target)
                return [i, j];
        }
    }
    return [0]
  }

  //-------------------------------------------------------- 2
  headNumber:number=0;
  headArray:number[]=[];

  addHeadArray(){
    this.headArray.push(this.headNumber);
  }

  reOrderList() {
    let forloops = this.headArray.length
    let arr = this.headArray;
    let newArr=[]

    for(let i=0; i< forloops;i++){
        let newData = 0;
        if(i%2==0){
            newData = Math.min(...arr);
            arr.splice(arr.indexOf(Math.min(...arr)),1);
        }
        else{
            newData = Math.max(...arr);
            arr.splice(arr.indexOf(Math.max(...arr)),1);
        }
        newArr.push(newData);
    }
    this.headArray=[]
    this.headArray=newArr
  };

  //------------------------------------------------------ 3
  factorialNumber:number = 0;

  factorialCalc(){
    let result = 1;
    if(this.factorialNumber < 2 && this.factorialNumber > 0)
    {
      return 1;
    }
    for (let i = 2; i <= this.factorialNumber; i++) {
      result *= i;
    }
    return result;
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-door-animate',
  standalone: true,
  imports: [],
  templateUrl: './door-animate.component.html',
  styleUrl: './door-animate.component.scss'
})
export class DoorAnimateComponent {
  class:string =""
  getClass(){
    return this.class;
  }

  statusDoor(status:string){
    this.class=status
  }
}

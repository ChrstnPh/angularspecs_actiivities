import { Component, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-subtract',
  templateUrl: './subtract.component.html',
  styleUrls: ['./subtract.component.css']
})
export class SubtractComponent {

  @Output() minus = new EventEmitter<any>();
  count = 0;

  receiveSubtract() {
    this.count--;
    this.minus.emit();
  }
  // count=0;
  // counter(type:string){
  //   // this.count++;
  //   type==='minus'?this.count--:this.count++;
  // }
}

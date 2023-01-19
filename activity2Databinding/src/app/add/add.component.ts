import { Component, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  @Output() add = new EventEmitter<any>();
  count = 0;

  receiveAdd() {
    this.count++;
    this.add.emit();
  }

  // constructor() { }
  // count=0;
  // counter(type:string){
  //   // this.count++;
  //   type==='add'?this.count++:this.count--;
  // }
}

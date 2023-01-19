import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Activity 2: Databinding';

  count = 0;

  receiveAdd(){
    this.count++;
  }

  receiveSubtract(){
    this.count--;
  }

  receiveEvent(){
    console.log();
  }
}



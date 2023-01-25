import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Activity 4: Reactive Form';
  isAddTask=false;
  taskList: Task[] = [
  {
    Name: 'Washing ',
    Description: ' Manually wash the clothes',
    AssignTo: 'Christian',
  
  }];

  addTask(task: Task) {
    this.taskList.push(task);
    this.isAddTask=false;
  }

  addNewTask(){
    this.isAddTask=true;
  }
}

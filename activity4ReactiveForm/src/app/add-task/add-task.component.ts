import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  ngOnInit(): void {
    this.taskForm.reset();
  }

  @Output() taskOut = new EventEmitter();
  taskForm = new FormGroup({
    taskName: new FormControl(''),
    taskDescription: new FormControl(''),
    taskDoer: new FormControl(''),
  })

  addTask() {
    // this.addTask.emit(this.taskForm.value);
  }
}

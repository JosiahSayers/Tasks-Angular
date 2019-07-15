import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent implements OnInit {

  newTaskInput = new FormControl('');
  @Output() taskEmitter = new EventEmitter();
  newTask: Task;

  constructor() { }

  ngOnInit() {
    this.newTask = new Task();
    this.newTaskInput.valueChanges.subscribe(value => {
      this.newTask.title = value;
    });
  }

  emitTask() {
    this.taskEmitter.emit(this.newTask);
    this.newTaskInput.reset();
  }

}

import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Task } from '../models/task.model';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent implements OnInit {

  newTaskForm = new FormGroup({
    input: new FormControl('')
  });
  @Output() taskEmitter = new EventEmitter();
  newTask: Task;
  faPlus = faPlus;

  constructor() { }

  ngOnInit() {
    this.newTask = {} as Task;
    this.newTaskForm.valueChanges.subscribe(value => {
      this.newTask.title = value.input;
    });
  }

  emitTask() {
    if (this.newTask.title) {
      this.taskEmitter.emit(this.newTask);
      this.newTaskForm.reset();
    }
  }

}

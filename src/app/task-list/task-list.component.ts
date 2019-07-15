import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  @Input() tasks: Task[];
  @Input() title: string;
  @Output() clickedTask = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  handleClick(taskId: number): void {
    this.clickedTask.emit(taskId);
  }

}

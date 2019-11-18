import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../models/task.model';
import { TaskList } from '../models/task-list.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  @Input() tasks: Task[];
  @Input() title: string;
  @Input() isComplete: boolean;
  @Output() clickedTask = new EventEmitter();
  @Output() deletedTask = new EventEmitter();
  @Output() update = new EventEmitter<Task>();

  constructor() { }

  ngOnInit() {
  }

  handleClick(taskId: number): void {
    this.clickedTask.emit(taskId);
  }

  deleteTask(taskId: number): void {
    this.deletedTask.emit(taskId);
  }

  sendUpdate(task: Task) {
    this.update.emit(task);
  }
}

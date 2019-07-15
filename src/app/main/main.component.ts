import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task.model';
import { TaskList } from '../models/task-list.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  taskList: TaskList;

  showCompletedTasks: boolean;
  completedTitle = 'Completed';
  uncompletedTitle = 'Need To Complete';

  constructor() { }

  ngOnInit() {
    this.taskList = new TaskList();
    this.showCompletedTasks = false;
  }

  addTaskToTaskList(task: Task) {
    this.taskList.addTask(task);
  }

  handleClickedTask(taskId: number): void {
    this.taskList.swapTask(taskId);
  }

  deleteTask(taskId: number): void {
    this.taskList.deleteTask(taskId);
  }

}

import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task.model';
import { TaskList } from '../models/task-list.model';
import { DatabaseService } from '../services/database.service';
import { AuthService } from '../services/auth.service';

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

  constructor(public auth: AuthService, private database: DatabaseService) { }

  ngOnInit() {
    this.taskList = new TaskList();
    this.showCompletedTasks = false;
    this.auth.user$.subscribe(user => {
      this.database.getTaskList().subscribe(taskList => {
        console.log(taskList);
        this.taskList.importTaskList(taskList);
      });
    })
  }

  addTaskToTaskList(task: Task) {
    this.taskList.addTask(task);
    this.database.saveTaskList(this.taskList);
  }

  handleClickedTask(taskId: number): void {
    this.taskList.swapTask(taskId);
    console.log(this.taskList);
    this.database.saveTaskList(this.taskList);
  }

  deleteTask(taskId: number): void {
    this.taskList.deleteTask(taskId);
    this.database.saveTaskList(this.taskList);
  }

}

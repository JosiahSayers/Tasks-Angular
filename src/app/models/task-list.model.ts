import { Task } from './task.model';

export class TaskList {
  protected completed: Task[];
  protected uncompleted: Task[];
  protected largestId: number;

  constructor() {
    this.largestId = 0;
    this.completed = [];
    this.uncompleted = [];
  }

  public addTask(task: Task) {
    const newTask = new Task();
    newTask.title = task.title;
    newTask.id = this.setNewIdAndIncrementTaskList();
    this.uncompleted.push(newTask);
  }

  public deleteTask(taskId: number): void {
    if (this.isTaskComplete(taskId)) {
      this.completed.splice(
        this.completed.findIndex(task => task.id === taskId),
        1
      );
    } else {
      this.uncompleted.splice(
        this.uncompleted.findIndex(task => task.id === taskId),
        1
      );
    }
  }

  private setNewIdAndIncrementTaskList(): number {
    return ++this.largestId;
  }

  public swapTask(taskId: number): void {
    let taskIndex: number;
    let task: Task[];

    if(this.isTaskComplete(taskId)) {
      taskIndex = this.completed.findIndex(task => task.id === taskId);
      task = this.completed.splice(taskIndex, 1);
      this.addElementAndSort(task[0], false);
    } else {
      taskIndex = this.uncompleted.findIndex(task => task.id === taskId);
      task = this.uncompleted.splice(taskIndex, 1);
      this.addElementAndSort(task[0], true);
    }
  }

  private isTaskComplete(taskId: number): boolean {
    return this.completed.filter(task => {
      return task.id === taskId;
    }).length > 0;
  }

  private addElementAndSort(task: Task, addToCompleted: boolean): void {
    if (addToCompleted) {
      this.completed.push(task);
      this.completed.sort((a, b) => a.id - b.id);
    } else {
      this.uncompleted.push(task);
      this.uncompleted.sort((a, b) => a.id - b.id);
    }
  }
}
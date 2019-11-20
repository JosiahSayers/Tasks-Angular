import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {

  isExpanded = false;

  @Input() task: Task;
  @Input() isComplete: boolean;
  @Output() check = new EventEmitter<void>();
  @Output() delete = new EventEmitter<void>();
  @Output() update = new EventEmitter<Task>();

  handleClick() {
    if (!this.isExpanded) {
      this.toggleExpandedStatus();
    }
  }

  toggleExpandedStatus() {
    this.isExpanded = !this.isExpanded;
  }

  sendDelete(): void {
    this.delete.emit();
  }

  sendCheck(): void {
    this.check.emit();
  }

  sendUpdate(): void {
    this.update.emit(this.task);
  }
}

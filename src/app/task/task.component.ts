import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../models/task.model';
import { faTrashAlt, faCheckSquare } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {

  trashIcon = faTrashAlt;
  checkIcon = faCheckSquare
  isExpanded = false;

  @Input() task: Task;
  @Output() taskClick = new EventEmitter();
  @Output() delete = new EventEmitter();

  toggleExpandedStatus() {
    this.isExpanded = !this.isExpanded;
  }
}

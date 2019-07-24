import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import { AuthService } from './auth.service';
import { TaskList } from '../models/task-list.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService{

  taskListRef: AngularFirestoreDocument<TaskList>;
  private user;

  constructor(
    private auth: AuthService,
    private afs: AngularFirestore
  ) {
    this.auth.user$.subscribe(user => {
      this.user = user;
      this.initTaskList();
    });
  }

  initTaskList() {
      this.taskListRef = this.afs.doc(`tasklist/${this.user.uid}`);
      //this.taskListRef.set({ uid: this.user.uid } as TaskList, {merge: true});
  }

  getTaskList(): Observable<TaskList> {
    return this.taskListRef.valueChanges();
  }

  saveTaskList(taskList: TaskList) {
      taskList.uid = this.user.uid;
      this.afs.doc(`tasklist/${this.user.uid}`).set(JSON.parse(JSON.stringify(taskList)));
  }
}

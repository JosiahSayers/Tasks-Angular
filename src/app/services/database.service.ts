import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import { AuthService } from './auth.service';
import { TaskList } from '../models/task-list.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService{

  private taskListRef: AngularFirestoreDocument<TaskList>;

  constructor(
    private auth: AuthService,
    private afs: AngularFirestore
  ) {
    this.auth.user$.subscribe(() => {
      if (this.auth.user) {
        this.initTaskList();
      }
    });
  }

  initTaskList() {
      this.taskListRef = this.afs.doc(`tasklist/${this.auth.user.uid}`);
      //this.taskListRef.set({ uid: this.user.uid } as TaskList, {merge: true});
  }

  getTaskList(): Observable<TaskList> {
    return this.taskListRef.valueChanges();
  }

  saveTaskList(taskList: TaskList) {
      taskList.uid = this.auth.user.uid;
      this.afs.doc(`tasklist/${this.auth.user.uid}`).set(JSON.parse(JSON.stringify(taskList)));
  }
}

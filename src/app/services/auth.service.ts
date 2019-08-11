import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { auth, User } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  user$: Observable<User>;
  user: User;

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router
  ){
    this.afAuth.authState.subscribe(user => {
      this.setCurrentUser(user);
    });
    this.user$ = this.afAuth.authState;
  }

  async googleSignIn() {
    const provider = new auth.GoogleAuthProvider();
    await this.afAuth.auth.signInWithPopup(provider).then(authCredentials => {
      this.setCurrentUser(authCredentials.user);
    });
    return this.router.navigate(['/main']);
  }

  async signOut() {
    await this.afAuth.auth.signOut().then(() => {
      this.setCurrentUser(null);
    });
    return this.router.navigate(['']);
  }

  private setCurrentUser(user: User): void {
    if (user) {
      this.user = user;
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      this.user = null;
      localStorage.setItem('user', null);
    }
  }

  get isSignedIn(): boolean {
    return JSON.parse(localStorage.getItem('user')) !== null;
  }

}

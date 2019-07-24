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

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router
  ){
    this.user$ = this.afAuth.authState;
  }

  async googleSignIn() {
    const provider = new auth.GoogleAuthProvider();
    await this.afAuth.auth.signInWithPopup(provider);
    return this.router.navigate(['/main']);
  }

  async signOut() {
    await this.afAuth.auth.signOut();
    return this.router.navigate(['']);
  }

}

import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from 'firebase';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-quick-info',
  templateUrl: './account-quick-info.component.html',
  styleUrls: ['./account-quick-info.component.scss']
})
export class AccountQuickInfoComponent {

  expanded = false;

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  get user(): User {
    return this.auth.user;
  }

  get userImage(): string {
    return this.user && this.user.photoURL || environment.IMAGE_URLS.GENERIC_USER;
  }

  get loggedIn(): boolean {
    return this.auth.isSignedIn;
  }

  toggleExpanded(): void {
    this.expanded = !this.expanded;
  }

  signOut(): void {
    this.auth.signOut();
  }

  navigateToLogin(): void {
    this.router.navigate(['/login']);
  }

}

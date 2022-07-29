import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-auth-button',
  template: `
    <ng-container *ngIf="auth.isAuthenticated$ | async; else loggedOut">
      <button
        (click)="auth.logout({ returnTo: document.location.origin })"
        class="btn btn-outline-danger my-2 my-sm-0"
      >
        Log out
      </button>
    </ng-container>

    <ng-template #loggedOut>
      <button
        (click)="auth.loginWithRedirect()"
        class="btn btn-outline-success my-2 my-sm-0"
      >
        Log in
      </button>
    </ng-template>
  `,
  styles: [],
})
export class AuthButtonComponent {
  constructor(
    @Inject(DOCUMENT) public document: Document,
    public auth: AuthService
  ) {}
}

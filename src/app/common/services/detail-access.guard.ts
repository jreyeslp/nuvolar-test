import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Query } from "@datorama/akita";
import { SessionState, SessionStore } from "../state-manager/state.store";

@Injectable({
  providedIn: 'root'
})
export class DetailAccessGuardGuard extends Query<SessionState> implements CanActivate {
  constructor(
    protected store: SessionStore,
    private router: Router) {

    super(store);
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.getValue().user ? true : this.router.navigate(['/search']);
  }

}

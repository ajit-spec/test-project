import {Injectable} from '@angular/core';
import {CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {Comp2Component} from '../components/comp2/comp2.component';

@Injectable({
  providedIn: 'root'
})
export class Guard1Guard implements CanDeactivate<Comp2Component> {
  canDeactivate(
    component: Comp2Component,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    localStorage.removeItem('username');
    localStorage.removeItem('password');

    return component.prop9;
  }

}

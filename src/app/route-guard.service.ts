import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ElementsServiceService } from './elements/elements-service.service';

@Injectable({
  providedIn: 'root'
})
// moje własne rozwiązanie działa dobrze z tego co widzę
export class RouteGuardService implements CanActivate {

  constructor(private elementsService: ElementsServiceService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const id = +route.params['id'];
    const routeParamValid = this.elementsService.canGet(id);
    this.elementsService.getRandomData();
    if(routeParamValid) {
      return true;
    }
    this.router.navigate(['/not-found']);
    return false;
  }
}

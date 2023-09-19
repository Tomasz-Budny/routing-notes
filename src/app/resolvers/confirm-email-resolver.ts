import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "../services/auth.service";

export const ConfirmEmailResolver: ResolveFn<boolean> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  return inject(AuthService).confirmEmail(route.queryParamMap.get('token'))
}
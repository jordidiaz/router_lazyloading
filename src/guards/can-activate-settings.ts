import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

export class CanActivateSettings implements CanActivate {

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : boolean {
        return false;
    }

}
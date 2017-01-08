import { CanLoad } from '@angular/router';
import { Route } from '@angular/router';

export class CanLoadMessages implements CanLoad {

    canLoad(route: Route): boolean { // ver la definición de CanLoad para ver que puedo devolver 
        return false;
    }

}
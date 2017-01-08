import { CanLoad } from '@angular/router';

export class CanLoadMessages implements CanLoad {

    canLoad(): boolean { // ver la definición de CanLoad para ver que puedo devolver 
        return false;
    }

}
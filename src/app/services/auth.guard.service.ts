import { Injectable }     from '@angular/core';
import { CanActivate, Router }    from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {

    constructor( private router:Router ){}

    canActivate():boolean {

        let token = window.localStorage.getItem( 'auth_token' );
        
        if( token ){

            return true;

        } else {
            
            this.router.navigate( [ 'auth' ] );

            return false;

        }

    }

}

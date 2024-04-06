import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    username = '';
    password = '';
    email = '';

    errorMessage = 'Invalid Credentials';
    invalidLogin = false;


    //Router
    constructor(private router: Router, public authenticationService: AuthenticationService) { }

    handleLogin() {
        if (this.authenticationService.authenticate(this.username, this.password)) {
            //redirect to welcome page


            this.router.navigate(['welcome', this.username]);

            this.invalidLogin = false;
        } else {
            this.invalidLogin = true;
        }
    }

}

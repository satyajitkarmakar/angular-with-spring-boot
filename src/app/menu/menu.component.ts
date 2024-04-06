import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
    isUserLoggedInOrNot: boolean = false;
    constructor(public authenticationService: AuthenticationService) { }

    ngOnInit(): void {
        this.isUserLoggedInOrNot = this.authenticationService.isUserLoggedIn();
    }
}

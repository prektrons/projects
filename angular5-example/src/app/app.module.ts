import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
selector: 'app-login',
templateUrl: './login/login.component.html',
styleUrls: ['./login/login.component.css']
})

export class LoginComponent implements OnInit {
email: string | undefined;
    password: string | undefined;

constructor(private router : Router) { }

ngOnInit() {

}

login() {
if(this.email == 'dhiraj@gmail.com' && this.password == 'password') {
this.router.navigate(['user']);
}else {
alert("Invalid credentials.")
}
}
}
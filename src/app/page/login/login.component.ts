import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private apiService: ApiService,
    private router: Router
  ) { }

  email_id : string;
  password: string;
  login: object
  ngOnInit() {
  }
  
  loginBtn() {
    console.log("cimnig",this)
    this.login = {
      email_id: this.email_id,
      password: this.password
    }
    this.apiService.loginUser(this.login).subscribe(

      (res) => {

        console.log('values', this);
        localStorage.setItem('type', 'user');
        localStorage.setItem('email_id', this.email_id)
        this.router.navigate(['/dashboard/profileCandidate', res] , { skipLocationChange: true });
        
        console.log('response', res);

      }, (error) => { 
        this.email_id = "";
        this.password = "";
        this.router.navigate(['/login'])

        console.log(error);

    });
  }
}

import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/services/api.service';
import { Router } from '@angular/router';
import * as uuid from 'uuid';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private apiService: ApiService,
    private router: Router
  ) { }

  first_name : string;
  last_name : string;
  email_id : string;
  password: string;
  register: object

  ngOnInit() {
  }

  registerBtn() {
    console.log("cimnig",this)
    this.register = {
      id: uuid.v4(),
      email_id: this.email_id,
      password: this.password,
      first_name: this.first_name,
      last_name: this.last_name
    }

    this.apiService.registerUser(this.register).subscribe(

      (res) => {

        console.log('values', this);
        localStorage.setItem('type', 'user');
        this.router.navigate(['/dashboard/profileCandidate', res] , { skipLocationChange: true });

        console.log('response', res);

      }, (error) => { 
        this.email_id = "";
        this.password = "";
        this.router.navigate([''])

        console.log(error);

    });
    
  }
}

import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/services/api.service';
import { Router } from '@angular/router';
import * as uuid from 'uuid';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterEmployeeComponent implements OnInit {

  constructor(
    private apiService: ApiService,
    private router: Router
  ) { }

  company_name : string;
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
      company_name: this.company_name
    }

    this.apiService.registerCompany(this.register).subscribe(

      (res) => {

        console.log('values', this);
        localStorage.setItem('type', 'company');

        this.router.navigate(['/dashboard/profileCompany', res] , { skipLocationChange: true });

        console.log('response', res);

      }, (error) => { 
        this.email_id = "";
        this.password = "";
        this.router.navigate(['/loginCompany'])

        console.log(error);

    });
    
  }
}

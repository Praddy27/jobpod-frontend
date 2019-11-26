import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router} from '@angular/router';
import { ApiService } from 'app/services/api.service';
import { rootRoute } from '@angular/router/src/router_module';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
   company_name: string;
   id: string;
   email_id: string;
   phone_no: string;
   country: string;
   description: string;
   update: object;
  
   constructor(
     private router: Router,
     private apiService: ApiService, 
     private route: ActivatedRoute) { }


 ngOnInit(){
    console.log(this.route.snapshot.params)
    
    let routeParams = this.route.snapshot.params;

    if(Object.keys(routeParams).length === 0){
      console.log("aschkadusgdfuias",localStorage.getItem('email_id'))
      this.apiService.getCompanyDetails(localStorage.getItem('email_id')).subscribe(

        (res) => {
  
          console.log('values', this);
  
          //this.router.navigate(['/dashboard/profileCandidate', res] , { skipLocationChange: true });
  
          console.log('response', res);
          this.company_name = res.company_name
          this.email_id = res.email_id
          this.phone_no = res.phone_no
          this.country = res.country
          this.description = res.description
          this.id = res.id

          
  
        }, (error) => { 
          this.email_id = "";
          
          this.router.navigate(['/loginCompany'])
  
          console.log(error);
  
      });
    } else {
      localStorage.setItem('email_id', routeParams.email_id);
    this.company_name = routeParams.company_name
    this.email_id = routeParams.email_id
    this.phone_no = routeParams.phone_no
    this.country = routeParams.country
    this.description = routeParams.description
    this.id = routeParams.id
  }

  }

  updateBtn() {
    console.log("cimnig",this);
    this.update = {
      email_id: this.email_id,
      phone_no: this.phone_no,
      country: this.country,
      description: this.description,
      id: this.id
    }
    this.apiService.updateCompany(this.update).subscribe(

      (res) => {

        console.log('values', this);

        this.router.navigate(['/dashboard/profile', res] , { skipLocationChange: true });

        console.log('response', res);

      }, (error) => { 
        this.email_id = "";
        
        this.router.navigate(['/loginCompany'])

        console.log(error);

    });
  }



}

import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ApiService } from 'app/services/api.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileCandidateComponent implements OnInit {
  first_name: string;
  id: string
  last_name: string;
  email_id: string;
  phone_no: string;
  country: string;
  language: string;
  skill: string;
  update: object

  constructor(private apiService: ApiService,
    private router: Router, private route: ActivatedRoute) { }


  languageForm = new FormControl();
  languageList: string[] = ['English', 'Tamil', 'Telgu', 'Spanish', 'Hindi'];
  skillForm = new FormControl();
  skillList: string[] = ['Kotlin', 'Android', 'OS support', 'Telemarketing', 'Sales', 'Help Desk'];
  ngOnInit() {
    let routeParams = this.route.snapshot.params;
    console.log(Object.keys(routeParams).length === 0)
    if(Object.keys(routeParams).length === 0){
      console.log("aschkadusgdfuias",localStorage.getItem('email_id'))
      this.apiService.getUserDetails(localStorage.getItem('email_id')).subscribe(

        (res) => {
  
          console.log('values', this);
  
          //this.router.navigate(['/dashboard/profileCandidate', res] , { skipLocationChange: true });
  
          console.log('response', res);
          this.first_name = res.first_name;
          this.last_name = res.last_name;
          this.email_id = res.email_id
          this.phone_no = res.phone_no
          this.country = res.country
          this.id = res.id

          this.languageForm.setValue(res.language);
          this.skillForm.setValue(res.skill);
  
        }, (error) => { 
          this.email_id = "";
          
          this.router.navigate(['/loginCompany'])
  
          console.log(error);
  
      });
    } else{
    localStorage.setItem('email_id', routeParams.email_id);
    this.first_name = routeParams.first_name;
    this.last_name = routeParams.last_name;
    this.email_id = routeParams.email_id
    this.phone_no = routeParams.phone_no
    this.country = routeParams.country
    this.id = routeParams.id

    this.languageForm.setValue(routeParams.language.split(','));
    this.skillForm.setValue(routeParams.skill.split(','));
    }
    
  }

  updateBtn() {
    this.language = this.languageForm.value;
    this.skill = this.skillForm.value;
    console.log("cimnig", this)
    this.update = {
      first_name: this.first_name,
      last_name: this.last_name,
      email_id: this.email_id,
      phone_no: this.phone_no,
      country: this.country,
      id: this.id,
      language: this.language,
      skill: this.skill
    }
    this.apiService.updateUser(this.update).subscribe(

      (res) => {

        console.log('values', this);

        //this.router.navigate(['/dashboard/profileCandidate', res] , { skipLocationChange: true });

        console.log('response', res);

      }, (error) => { 
        this.email_id = "";
        
        this.router.navigate(['/loginCompany'])

        console.log(error);

    });

  }



}

import { Component, OnInit } from '@angular/core';
import { ApiService } from 'app/services/api.service';
declare const swal: any;

@Component({
  selector: 'app-pricetable',
  templateUrl: './pricetable.component.html',
  styleUrls: ['./pricetable.component.css']
})
export class PriceTableComponent implements OnInit {
  array: Object[];
  pod_status: String;
  inputData :Object;
  success;
  pod;

  constructor(private apiService: ApiService) { 
   
  }

  ngOnInit() {
    this.viewMyPods();
  }

  openAlert(type, pod_id, email_id){
    this.inputData = {
      'email_id': localStorage.getItem('email_id'),
      'pod_id': pod_id,
      'company': email_id
    }
    console.log(this.inputData);
    // swal({
    //   title: 'Are you sure?',
    //   text: 'You won\'t be able to revert this! Other Request will be deleted',
    //   type: 'warning',
    //   showCancelButton: true,
    //   confirmButtonClass: 'btn btn-success',
    //   cancelButtonClass: 'btn btn-danger',
    //   confirmButtonText: 'YES, CONFIRM IT!'
    // })
    // .then(function () {
    //   swal({
    //     title: 'Added!',
    //     text: 'You have has been added to pod.',
    //     type: 'success',
    //     confirmButtonClass: 'btn btn-info'
    //   });
    // });
    // .then(function (this.inputData) {
      
    //   console.log(this.inputData);
    //   this.acceptOffer(this.inputData);
    // });

      this.acceptOffer(this.inputData);
  }

  viewMyPods() {
    this.apiService.getMyPod(localStorage.getItem('email_id')).subscribe(
      (res) => {
        console.log('Response', res);
         this.array = res.pod;
         if(res.details == ""){
           this.pod = false
         }
         else if(res.details == "success"){
           this.pod = true
          this.success = false
         } else{
           this.success = true
           this.pod = true
         }
         console.log(this)
         //this.successdetail = res.detail;

      }, (error) => {
        console.log(error);
      });
  }

  

  acceptOffer(data) {
    this.apiService.acceptCompanyOffer(data).subscribe(
      (res) => {
        console.log('Response', res);
        this.viewMyPods();

      }, (error) => {
        console.log(error);
      });

  }

}

import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { PodCreateFormComponent } from 'app/dashboard/component/pod-create-form/pod-create-form.component';
declare const swal: any;
import { Router } from '@angular/router';
import { ApiService } from 'app/services/api.service';


@Component({
  selector: 'app-company-pod-page',
  templateUrl: './company-pod-page.component.html',
  styleUrls: ['./company-pod-page.component.css']
})
export class CompanyPodPageComponent implements OnInit {
  dialogRef;
  array;
  searchData;
  data;
  constructor(private dialog: MatDialog, private router: Router,
    private apiService: ApiService) {
  // this.array = [
  //     {
  //       company_name: 'first1',
  //       pod_name: 'last1',
  //       start_date: '27/11/2019',
  //       end_date: '30/11/2019',
  //       description: 'HI HOW R U'
  //   },
  //   {
  //     company_name: 'first1',
  //     pod_name: 'last1',
  //     start_date: '27/11/2019',
  //     end_date: '30/11/2019',
  //     description: 'asudgaisugdiuagsudiga'
  //   },
  //   {
  //     company_name: 'first1',
  //     pod_name: 'last1',
  //     start_date: '27/11/2019',
  //     end_date: '30/11/2019',
  //     description: 'asudgaisugdiuagsudiga'
  //   }
  //   ]
    }

  ngOnInit() {
    // this.podForm1.value['email_id'] = localStorage.getItem('email_id');
    // this.podForm1.value['id'] = uuid.v4();
    // console.log(this.podForm1.value);
    this.apiService.searchCompanyPod(localStorage.getItem('email_id')).subscribe(
      (res) => {
        this.array = res;
        console.log('Response', res);
        // console.log(this.podForm1.value);
        // this.openAlert();
        // this.dialog.closeAll();
        // this.router.navigateByUrl('/dashboard/components/company-pod-page')
      }, (error) => {
        console.log(error);
      });

  }

  openDialog() {
    this.dialogRef = this.dialog.open(PodCreateFormComponent);
  }

  searchUsers(userskills, podId) {
    console.log('userskills', userskills);
    console.log('pod id', podId);
    this.data = {
      'skill': userskills,
      'pod_id': podId
    }

    
    this.router.navigate(['/dashboard/table', this.data]  , { skipLocationChange: true });
    // this.searchData = {
    //   'skill' : data
    // }
    // console.log('search data', this.searchData)
    // this.apiService.searchUsers(this.searchData).subscribe(
    //   (res) => {
    //     console.log('Response', res);
    //     // console.log(this.podForm1.value);
    //     // this.openAlert();
    //     // this.dialog.closeAll();
    //     this.router.navigate(['/dashboard/table', res] , { skipLocationChange: true });
    //   }, (error) => {
    //     console.log(error);
    //   });

  }

  // viewUsers(podId) {
  //   console.log(this.router);
  //   this.router.navigate(['/dashboard/components/view-pod-users', podId] , { skipLocationChange: true });
  // }

  viewUsers(podId) {
    this.data = {
      'pod_id': podId
    }
    this.router.navigate(['/dashboard/components/view-pod-users', this.data], { skipLocationChange: true });
  }


}

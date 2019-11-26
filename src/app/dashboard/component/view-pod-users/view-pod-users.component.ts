import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'app/services/api.service';

@Component({
  selector: 'app-view-pod-users',
  templateUrl: './view-pod-users.component.html',
  styleUrls: ['./view-pod-users.component.css']
})
export class ViewPodUsersComponent implements OnInit {
  array;
  inputData;


  constructor(private router: Router, private route: ActivatedRoute,
    private apiService: ApiService) { }

    ngOnInit() {
      console.log(this.route.snapshot.params);
       this.viewUsersInPod(this.route.snapshot.params);
    }

    viewUsersInPod(data) {
      console.log(data);
      this.inputData = {
        'email_id': localStorage.getItem('email_id'),
        'pod_id': data.pod_id
      }
      this.apiService.viewUsersInPod(this.inputData).subscribe(
        (res) => {
          console.log('Response', res);
           this.array = res;
          // this.podId = res[0].pod_id;
          // console.log(this.podForm1.value);
          // this.openAlert();
          // this.dialog.closeAll();
          // this.router.navigate(['/dashboard/table', res] , { skipLocationChange: true });
        }, (error) => {
          console.log(error);
        });

    }

}

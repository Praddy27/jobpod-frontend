import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'app/services/api.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  array;
  searchData;
  parsedData;
  podId;
  usersList: any = [];
  addUserData;

  constructor(private router: Router, private route: ActivatedRoute,
    private apiService: ApiService) {
    // this.array = [
    //   {
    //     username: 'first1',
    //     skills: 'last1',
    //     languages: '27/11/2019',
    //     ratings: '30/11/2019',
    //     amount: 'HI HOW R U'
    //   },
    //   {
    //     username: 'first1',
    //     skills: 'last1',
    //     languages: '27/11/2019',
    //     ratings: '30/11/2019',
    //     amount: 'HI HOW R U'
    //   }
    // ]
  }

  ngOnInit() {
    console.log('snapshot', this.route.snapshot.params)
    // this.array = this.route.snapshot.params;
    this.searchUsers(this.route.snapshot.params);

  }

  searchUsers(data) {
    console.log("retrived data", data);

    this.apiService.searchUsers(data).subscribe(
      (res) => {
        console.log('Response', res);
        this.array = res[1].user;
        this.podId = res[0].pod_id;

      }, (error) => {
        console.log(error);
      });
  }
  

  addUsersToPod() {
    this.addUserData = {
      'email_id': localStorage.getItem('email_id'),
      'user_id': this.usersList,
      'id': this.podId
    }
    console.log(this.addUserData);
    // this.router.navigate(['/dashboard/view-pod-users', this.addUserData]  , { skipLocationChange: true });

    this.apiService.addNewUsers(this.addUserData).subscribe(
      (res) => {
        console.log('Response', res);
        this.router.navigate(['/dashboard/components/company-pod-page']);

      }, (error) => {
        console.log(error);
      });

  }

  addEmailIfChecked(e, email) {
    console.log('my event', e);
    console.log('my event', email);
    if (e.checked) {
      console.log('my event', email);
      this.usersList.push(email);
    } else {
      this.deleteElement(email);
    }
  }

  deleteElement(email: string) {
    const index: number = this.usersList.indexOf(email);
    if (index !== -1) {
      this.usersList.splice(index, 1);
    }
  }

}

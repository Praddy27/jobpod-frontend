import { Component, OnInit } from '@angular/core';
import { FormControl} from '@angular/forms';
import { FormGroup , FormBuilder, Validators} from '@angular/forms';
import * as uuid from 'uuid';
import { ApiService } from 'app/services/api.service';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
declare const swal: any;


@Component({
  selector: 'app-pod-create-form',
  templateUrl: './pod-create-form.component.html',
  styleUrls: ['./pod-create-form.component.css']
})
export class PodCreateFormComponent implements OnInit {

  languageForm1 = new FormControl();
  languageList: string[] = ['English', 'Tamil', 'Telgu', 'Spanish', 'Hindi'];
  skillForm1 = new FormControl();
  skillList: string[] = ['Kotlin', 'Android', 'OS support', 'Telemarketing', 'Sales', 'Help Desk'];
  podForm1: FormGroup;


  constructor(private formBuilder: FormBuilder,
    private apiService: ApiService,
    private router: Router,
    public dialog: MatDialog) { }

  ngOnInit() {
    this.podForm1 = this.formBuilder.group({
      pod_name: ['', Validators.required],
      language: ['', Validators.required],
      skill: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      description: ['', Validators.required],
      min_user: ['', Validators.required]
  });
  }

  createPod() {
    this.podForm1.value['email_id'] = localStorage.getItem('email_id');
    this.podForm1.value['id'] = uuid.v4();
    console.log(this.podForm1.value);
    this.apiService.createPod(this.podForm1.value).subscribe(
      (res) => {
        console.log(this.podForm1.value);
        this.openAlert();
        this.dialog.closeAll();
        this.router.navigateByUrl('/dashboard/components/company-pod-page')
        location.reload()
      }, (error) => {
        console.log(error);
      });

  }


  openAlert() {
    swal({
      title: 'Pod Created!',
      confirmButtonClass: 'btn btn-success'
    });

  }
}

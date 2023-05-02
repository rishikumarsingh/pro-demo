
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/service/common.service';
import { MasterService } from 'src/app/service/master.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  hide: boolean = true;
  showspinner: boolean = false;


  loginForm = new FormGroup({
    email: new FormControl('', Validators.email),
    password: new FormControl('')
    // password: new FormControl('', Validators.compose([
    //   Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
    // ]))
  });

  constructor(private masterservice: MasterService, private route: Router, private commonservice: CommonService) { }

  ngOnInit(): void {
  }

  loginFunction() {

    if (this.loginForm.valid) {

      console.log(this.loginForm.value);

      this.showspinner = true;
      this.masterservice.Login(this.loginForm.value).subscribe(res => {
        this.showspinner = false;

        if (res['success'] == true) {

          localStorage.setItem('access-token', res.data.token);
          this.route.navigateByUrl('/admin/dashboard');
          this.commonservice.snackBarhandle(res);
        }
        else {
          this.commonservice.snackBarHandleError(res);
        }

      })

    }
  }



}


import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private snackBar: MatSnackBar, private route: Router) { }

  snackBarhandle(responce: any) {

    if (responce.success == true) {
      this.snackBar.open(responce.message, 'X', {
        duration: 2000,
        verticalPosition: 'top',
        horizontalPosition: 'right',
        panelClass: 'snake-success'
      })
    }
  }

  snackBarHandleError(responce: any) {
    if (responce.success == false) {
      this.snackBar.open(responce.message, 'X', {
        duration: 2000,
        verticalPosition: 'top',
        horizontalPosition: 'right',
        panelClass: 'snake-error'
      })
    }
  }


  getToken() {

    let token = localStorage.getItem('access-token');
    return token;

  }

  get isLogIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return (authToken !== null) ? true : false
  }



}

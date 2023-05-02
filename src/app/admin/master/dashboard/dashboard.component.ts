
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CommonService } from 'src/app/service/common.service';
import { MasterService } from 'src/app/service/master.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  showspinner: boolean = false;


  customerForm = new FormGroup({

    city: new FormControl(''),
    village: new FormControl(''),
    district: new FormControl(''),
    state: new FormControl(''),

  })

  dataSource: any = []

  displayedColumns: string[] = ['id', 'city', 'village', 'district', 'state', 'action'];


  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  customerId: any;

  ngAfterViewInit() {
  }


  constructor(private masterservice: MasterService, private commonservice: CommonService) { }

  ngOnInit(): void {
    this.loadcustomerList();
  }

  customerFunction() {

    this.showspinner = true;

    if (this.customerId != undefined) {
      this.masterservice.updateCustomervillage(this.customerForm.value, this.customerId).subscribe(res => {
        this.showspinner = false;
        console.log(res);

        if (res['success'] == true) {
          this.loadcustomerList();
          this.commonservice.snackBarhandle(res);

        }
        else {
          this.commonservice.snackBarHandleError(res);
        }

      })
    }


    else {
      this.masterservice.insertCustomervillage(this.customerForm.value).subscribe(res => {
        this.showspinner = false;
        console.log(res);
        if (res['success'] == true) {
          this.loadcustomerList();
          this.customerForm.reset();
          this.commonservice.snackBarhandle(res);

        }
        else {
          this.commonservice.snackBarHandleError(res);
        }
      })
    }


  }

  loadcustomerList() {
    this.showspinner = true;
    this.masterservice.getCustomervillage().subscribe(res => {
      this.showspinner = false;
      this.dataSource = new MatTableDataSource(res.data);
      this.dataSource.paginator = this.paginator;
    })
  }

  editCustomerfunction(element: any) {
    this.customerForm.get('city')?.setValue(element.city);
    this.customerForm.get('village')?.setValue(element.village);
    this.customerForm.get('district')?.setValue(element.district);
    this.customerForm.get('state')?.setValue(element.state);
    this.customerId = element.id
  }

  deleteCustomerfunction(element: any) {
    this.masterservice.deleteCustomervillage(element.id).subscribe(res => {
      console.log(res);
      if (res['success'] == true) {
        this.loadcustomerList();
        this.commonservice.snackBarhandle(res);

      }
      else {
        this.commonservice.snackBarHandleError(res);
      }
    })
  }


}





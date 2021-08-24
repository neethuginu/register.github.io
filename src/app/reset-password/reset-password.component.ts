import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  
  form: FormGroup = new FormGroup({});
  submitted = false;
  dataObj: any;

  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstname: ["", Validators.required],
      password: ["", Validators.required],
      lastname: ["", Validators.required],
      email: ["", Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")],
      otp: ["", Validators.required],
      phone: ["", Validators.required],

    });
  }

  otpGenerate(data: any) {
    let type = "generic"
    // console.log(data)
    this.dataService.generateOtp(data, type).subscribe((res: any) => {
      console.log(res)
    })
  }

  resendOtp(data: any) {
    console.log(data)
  }

  onSubmit(data: any) {
    if (this.form.valid) {
      console.log(data)
      this.dataService.create(data).subscribe((res: any) => {
        console.log(data)

      })
      alert("registration Successfull")
      this.router.navigateByUrl("login");
    }
    else {
      alert("invalid Form")
    }

  }

}

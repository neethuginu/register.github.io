import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      phone: ["", Validators.required],
      password: ["", Validators.required],
    });
  }

  onSubmit(data: any) {
    if (this.form.valid) {
      console.log(data)
      var phone = data.phone;
      var pwd = data.password;
      var deviceId="356987456326987";
      var deviceType="netscape"
      this.dataService.login(phone, pwd,deviceId, deviceType).subscribe((res) => {   
        console.log(res)     
        this.router.navigateByUrl("/dashboard");
      })
    }
  }
  forgotPassword(data:any){
    localStorage.setItem("phone", data)

      this.router.navigateByUrl("/passwordReset");
  
  }

}

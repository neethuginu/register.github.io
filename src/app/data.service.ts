import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, mapTo } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrl=`https://strofesapps.live/challenge/`

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  generateOtp(phone:any,type:any):Observable<any | boolean>  {
    // const datas: any = { data, type }
    // console.log(datas)
    return this.http.post("https://strofesapps.live/challenge/user/generate-otp",phone,type)
    .pipe(
      mapTo(true),
      catchError((error) => {
        console.log(error)
        return error;
      })
    );
  }

  create(data: any): Observable<any | boolean> {
    return this.http.post("https://strofesapps.live/challenge/user/register", data).pipe(
      mapTo(true),
      catchError((error) => {
        return error;
      })
    );
  }

  login(uname: any, pswd: any,deviceId:any, deviceType:any) {
    const data: any = { uname, pswd,deviceId, deviceType }
    console.log(data)
    return this.http.post("https://strofesapps.live/challenge/user/login", data).pipe(
      map((value: any) => {
        console.log(value)
       
      }),
      catchError((error) => {
        return error;
      })
    );
  }

  getProduct(){
    return this.http.get("https://strofesapps.live/challenge/products/get-all-products")
  }

}


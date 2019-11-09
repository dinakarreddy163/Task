import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  adminLogin: FormGroup;
  submitted = false;

  constructor(private formbuilder: FormBuilder, private http: HttpClient, private _router: Router) { }

  ngOnInit() {

    this.adminLogin = this.formbuilder.group({
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      age: ['', Validators.required],
      phone: ['', Validators.required]
    })
  }
  get f() {

    return this.adminLogin.controls;
  }
  data: any;
  onSubmit() {
    debugger
    this.submitted = true;
    console.log(this.adminLogin.value.userName);
    const httpOptions = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
        'Content-Type': 'application/json',
        // 'Access-Control-Allow-Headers': 'X-Requested-With'
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
        // 'Authorization': `Bearer  ${localStorage.getItem('token')}`
        //  ' setRequestHeader': 'application/json, text/plain, */*'
      })
    };

    let body = {
      "auth_code": "test298", "user_name": this.adminLogin.value.userName, "user_email": this.adminLogin.value.email,
      "user_age": this.adminLogin.value.age, "User_phone": this.adminLogin.value.phone
    }

    return this.http.post(environment.apiUrl + 'ng-api/createUser', body, httpOptions).subscribe((res) => {
      console.log(res);
      let data = [];
      this.data = res;
      if (this.data.status == "1") {
        alert(this.data.msg);
        this._router.navigate(['/']);
        localStorage.setItem('list', this.data);
      }
      else if (this.data.status == "0") {
        alert(this.data.msg)
      }
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import {environment} from '../../../environments/environment'

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  list: any[] = [];
  constructor(private http: HttpClient, private _router: Router) { }

  ngOnInit() {
    this.onSubmit();
  }
  data: any;
  onSubmit() {
    debugger
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
      "auth_code": "test298"
    }
    return this.http.post(environment.apiUrl+'ng-api/getUsers', body, httpOptions).subscribe((res) => {
      console.log(res);
      this.data = res;
      this.list = this.data.responce;
    })
  }
  editUser(id)
  {
    debugger
    this.data=this.list.filter(e=>e.user_id==id);
    localStorage.setItem('userupdate',JSON.stringify(this.data));
    this._router.navigate(['Update']);
  }
}

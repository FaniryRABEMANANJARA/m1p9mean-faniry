import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { User } from './user.model';


@Injectable()
export class UserService {
  "selectedUser": User;
  "users": User[];

private baseURL = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  postUser(use:User){
    var base=this.baseURL+"test";
    console.log(base);
    return this.http.post(base,use);
  }

  getUserList(){
    return this.http.get(this.baseURL);
  }

  putUser(use : User){
    return this.http.put(this.baseURL+ `/${use._id}`,use);
  }

  deleteUser(_id:string){
    return this.http.delete(this.baseURL+ `/${_id}`);
  }
}

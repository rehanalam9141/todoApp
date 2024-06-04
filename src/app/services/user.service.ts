import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  apiUrl = "http://localhost:3000/user/"

  getAllUser(){
    return this.http.get<User[]>(this.apiUrl);
  }

  getUserById(id:number){
    return this.http.get<User>(this.apiUrl + id);
  }

  addUser(user:User){
    return this.http.post<User>(this.apiUrl, user);
  }

  updateUser(id:number,user:User){
    return this.http.put<User>(this.apiUrl + id, user);
  }

  deleteUser(id:number){
    return this.http.delete<User>(this.apiUrl + id);
  }
}

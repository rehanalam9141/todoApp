import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient, private router:Router) { }

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

  userLogin(data:User){
    return this.http.get<User[]>(`http://localhost:3000/user?email=${data.email}&password=${data.password}`)
  }

  // userLogin(data:User){
  //   this.http.get<User[]>(`http://localhost:3000/user?email=${data.email}&password=${data.password}`,
  //     { observe:'response'}
  //   ).subscribe((result)=>{
  //     if(result && result.body){
  //       localStorage.setItem('user',JSON.stringify(result.body[0]));
  //       this.router.navigate(['user'])
  //     }
  //   })
  // }

}

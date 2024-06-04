import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  apiUrl = "http://localhost:3000/user"

  getAllUser(){
    return this.http.get<User[]>(this.apiUrl);
  }
}

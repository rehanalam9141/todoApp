import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../model/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http:HttpClient) { }

  apiUrl = "http://localhost:3000/task/"

  getAllTask(){
    return this.http.get<Task[]>(this.apiUrl);
  }

  getTaskById(id:number){
    return this.http.get<Task>(this.apiUrl + id);
  }

  addTask(user:Task){
    return this.http.post<Task>(this.apiUrl, user);
  }

  updateTask(id:number,user:Task){
    return this.http.put<Task>(this.apiUrl + id, user);
  }

  deleteTask(id:number){
    return this.http.delete<Task>(this.apiUrl + id);
  }
}

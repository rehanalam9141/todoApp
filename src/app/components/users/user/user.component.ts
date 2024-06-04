import { Component } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { IUser } from '../../../types/user';
import { User } from '../../../model/user';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
constructor(private userService:UserService){
}

Users:IUser [] = [] 
ngOnInit(): void {
  this.AllUser();  
}

AllUser(){
  this.userService.getAllUser().subscribe(result =>{
    this.Users = result
  })
}
}

import { Component } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { IUser } from '../../../types/user';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
constructor(private userService:UserService, private router:Router){
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

addUser(){
  this.router.navigate(['/adduser'])
}
viewUser(id:number){
  this.router.navigate(['/user-detail/', id])
}
}

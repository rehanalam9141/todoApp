import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { User } from '../../../model/user';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-user',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.css'
})
export class UpdateUserComponent {
  constructor(private activatedRout:ActivatedRoute, private userService:UserService, private router:Router){}

  id:number=0
  user!:User
  ngOnInit(): void {
    this.activatedRout.params.subscribe((param)=>
    {
      this.id = param['id'];
      this.userService.getUserById(this.id).subscribe((result)=>{
        this.user = result
      })
    })
  }

  
  editUser(){
    this.userService.updateUser(this.id,this.user).subscribe((result)=>{
      alert("User updated successfully")
      this.router.navigate(['user-detail/' + this.id]);
    })
  }
}

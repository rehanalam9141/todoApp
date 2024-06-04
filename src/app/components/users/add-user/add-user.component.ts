import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { Router, RouterLink } from '@angular/router';
import { User } from '../../../model/user';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})


export class AddUserComponent {

  form!:FormGroup;

constructor(private userService:UserService, 
  private router:Router){
  this.form = new FormGroup({
    name: new FormControl('',[Validators.required, Validators.minLength(5)]),
    email: new FormControl('',[Validators.required, Validators.email]),
    userStatus: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required, Validators.minLength(5)]),
    confirmPassword: new FormControl('',[Validators.required, Validators.minLength(5)]),
    description: new FormControl('',[Validators.required]),
  });
}

get f(){
  return this.form.controls;
}

addUser(){
  if(this.form.invalid){
    alert("Please fill ther form");
    return;
  }
    this.userService.addUser(this.form.value).subscribe((result:User)=>{
    alert("User added Successfully")
})
    this.router.navigate(['user'])
}
}

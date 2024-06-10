import { Component } from '@angular/core';
import { User } from '../../../model/user';
import { CommonModule } from '@angular/common';
import { Form, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
user!:User;
form!:FormGroup;
constructor(private userService:UserService, private router:Router){
  this.form = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required])
  });
}
ngOnInit(): void {
  sessionStorage.setItem("isLogined","false");
  return;
}

login(){
  this.user = this.form.value;
  this.userService.getAllUser().subscribe((result)=>{
    const user = result.find((a:User)=>{
      return a.email === this.form.value.email && a.password === this.form.value.password 
    });
    if(user){
      alert("Login Successfully")
      sessionStorage.setItem("isLogined","true")
      //this.router.navigate(['user'])
      this.router.navigate(['/user-detail/', user.id])
      this.form.reset();
    } else{
      alert("Invalid email and password or user not found")
      this.form.reset();
      sessionStorage.setItem("isLogined","false")
    }
  })
 
}
}

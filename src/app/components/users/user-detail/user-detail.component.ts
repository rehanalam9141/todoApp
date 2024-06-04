import { Component } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { User } from '../../../model/user';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [TitleCasePipe, RouterLink],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})
export class UserDetailComponent {

  constructor(private userService:UserService, 
    private activatedRout:ActivatedRoute,
    private router:Router
  ) {
    
  }
  id:number = 0
  user!:User;

  ngOnInit(): void {
    this.activatedRout.params.subscribe((param)=>
    {
      this.id = param['id'];
      this.userService.getUserById(this.id).subscribe((result)=>{
        this.user = result
      })
    })
  }

  addUser(){
    this.router.navigate(['/adduser'])
  }
  updateUser(id:number){
    this.router.navigate(['/edituser', id])
  }

  deleteUser(id:number){
    this.userService.deleteUser(id).subscribe((result)=>{
      alert("User successfully Deleted");
      this.router.navigate(['/user'])
    })
  }
}

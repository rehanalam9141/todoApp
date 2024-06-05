import { Component } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { ActivatedRoute, Route, Router, RouterLink } from '@angular/router';
import { User } from '../../../model/user';
import { CommonModule, TitleCasePipe } from '@angular/common';
import { Task } from '../../../model/task';
import { TaskService } from '../../../services/task.service';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [TitleCasePipe, RouterLink, CommonModule],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})
export class UserDetailComponent {

  constructor(
    private userService:UserService, 
    private taskService:TaskService, 
    private activatedRout:ActivatedRoute,
    private router:Router,

  ) { }

  uid:number = 0
  tid:number = 0
  user!:User;
  task:Task[]=[];
  taskById:Task[]=[];



  ngOnInit(): void {
    this.activatedRout.params.subscribe((param)=>
    {
      this.uid = param['id'];
      this.userService.getUserById(this.uid).subscribe((result)=>{
        this.user = result
      })
     this.getTaskById();
     
    })
  }

  getTaskById(){
    this.taskService.getAllTask().subscribe(result=>{
      this.task = result
      this.taskById = this.task.filter(i => i.userId === this.uid)
     })
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

  addTask(id:number){
    if(this.user.userStatus === "false"){
      alert("this user is InActive and can not perform any action")
      return;
    }
    this.router.navigate(['addtask/', id])
  }

  
  editTask(id:number){
    this.router.navigate(['/edittask',this.uid,id])
  }

  deleteTask(id:number){
    this.taskService.deleteTask(id).subscribe((result)=>{
      alert("Task successfully Deleted");
      this.getTaskById();
      this.router.navigate(['user-detail/'+this.uid])
    })
  }
}



import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../../../services/task.service';
import { Task } from '../../../model/task';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-task',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './update-task.component.html',
  styleUrl: './update-task.component.css'
})
export class UpdateTaskComponent {

  uid:number = 0
  tid:number = 0
  task!:Task

  constructor(private activatedRoute:ActivatedRoute, private taskService:TaskService, private router:Router){

  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param)=>
    {
      this.uid = param['id'];
      this.tid = param['id']
      this.taskService.getTaskById(this.tid).subscribe((result)=>{
      this.task = result
      })     
    })
  }

  editTask(){
    this.taskService.updateTask(this.uid,this.task).subscribe((result)=>{
      alert("Task updated successfully")
      this.router.navigate(['user-detail/' + this.task.userId]);
    })

  }
}

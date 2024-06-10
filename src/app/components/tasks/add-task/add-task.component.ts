import { Component } from '@angular/core';
import { TaskService } from '../../../services/task.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Task } from '../../../model/task';
import { Category, TaskStatus } from '../../../types/enum';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {

  form!:FormGroup;
  uid!:number;
  
  tStatus = TaskStatus;
  tcategory = Category;
  statusKey = Object.keys
  categoryKey = Object.keys
  
  constructor(private taskService:TaskService, 
    private router:Router,
    private activatedRoute:ActivatedRoute){
    
  }
  ngOnInit(): void {
  this.activatedRoute.params.subscribe((param)=>{
    this.uid = param['id']
  })
  this.form = new FormGroup({
    userId: new FormControl(this.uid,[Validators.required]),
    taskName: new FormControl('',[Validators.required, Validators.minLength(5)]),
    category: new FormControl('',[Validators.required]),
    taskStatus: new FormControl('',[Validators.required]),
    createdOn: new FormControl('',[Validators.required]),
    completedOn: new FormControl('',[Validators.required]),
    dueDate: new FormControl('',[Validators.required]),
    description: new FormControl('',[Validators.required]),
  });
}
  get f(){
    return this.form.controls;
  }
addTask(){
    if(this.form.invalid){
      alert("Please fill ther form");
      return;
    }
      this.taskService.addTask(this.form.value).subscribe((result:Task)=>{
      alert("Task added Successfully")
  })
      this.router.navigate(['user-detail/'+this.uid])
  
}
}

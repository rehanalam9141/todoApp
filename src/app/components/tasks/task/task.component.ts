import { Component } from '@angular/core';
import { TaskService } from '../../../services/task.service';
import { Task } from '../../../model/task';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {

  task!:Task[]
  constructor(private taskService:TaskService){
  }

  ngOnInit(): void {
    this.taskService.getAllTask().subscribe((result)=>{
      this.task = result
    })
  }
    
}

export class Task {
    
    id:number;
    taskName:string;
    category:string;
    createdOn: Date;
    completedOn: Date;
    dueDate: Date;
    taskStatus:string;
    description: string;
    userId:number


    constructor() {
        this.id = 0;
        this.taskName = '';
        this.category = '';
        this.createdOn = new Date;
        this.completedOn = new Date;
        this.dueDate = new Date;
        this.taskStatus = '';
        this.description = '';
        this.userId= 0
    }

}
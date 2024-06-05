export interface ITask {
    id: number;
    taskName: string;
    category: string;
    createdOn: Date;
    completedOn: Date;
    dueDate: Date;
    taskStatus:boolean,
    description: string,
    userId:string
}

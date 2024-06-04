export class User {
    
    id:number;
    name:string;
    email:string;
    password:string;
    userStatus:string;
    description:string


    constructor() {
        this.id = 0;
        this.name = '';
        this.email = '';
        this.password = '';
        this.userStatus = ''
        this.description = '';
    }

}
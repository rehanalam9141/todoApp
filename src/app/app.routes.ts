import { Routes } from '@angular/router';
import { UserComponent } from './components/users/user/user.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AddUserComponent } from './components/users/add-user/add-user.component';
import { UpdateUserComponent } from './components/users/update-user/update-user.component';
import { TaskComponent } from './components/tasks/task/task.component';
import { UpdateTaskComponent } from './components/tasks/update-task/update-task.component';
import { HomeComponent } from './components/home/home.component';
import { UserDetailComponent } from './components/users/user-detail/user-detail.component';

export const routes: Routes = [
    { path:'', redirectTo:'user', pathMatch:'full'},
    { path:'home', component: HomeComponent},
    { path:'user', component: UserComponent},
    { path:'user-detail/:id', component: UserDetailComponent},
    { path:'adduser', component: AddUserComponent},
    { path:'edituser/:id', component: UpdateUserComponent},
    { path:'task', component: TaskComponent},
    { path:'addtask', component: TaskComponent},
    { path:'edittask/:id', component: UpdateTaskComponent},
    { path:'not-found', component: NotFoundComponent},
    { path:'**', redirectTo:'not-found'},
];

import { Routes } from '@angular/router';
import { UserComponent } from './components/users/user/user.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AddUserComponent } from './components/users/add-user/add-user.component';
import { UpdateUserComponent } from './components/users/update-user/update-user.component';
import { TaskComponent } from './components/tasks/task/task.component';
import { UpdateTaskComponent } from './components/tasks/update-task/update-task.component';
import { HomeComponent } from './components/home/home.component';
import { UserDetailComponent } from './components/users/user-detail/user-detail.component';
import { AddTaskComponent } from './components/tasks/add-task/add-task.component';
import { LoginComponent } from './components/login/login/login.component';
import { SignupComponent } from './components/login/signup/signup.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    { path:'', redirectTo:'login', pathMatch:'full'},
    { path:'home', component: HomeComponent},
    { path:'user', component: UserComponent},
    { path:'user-detail/:id', component: UserDetailComponent, canActivate:[authGuard]},
    { path:'adduser', component: AddUserComponent},
    { path:'edituser/:id', component: UpdateUserComponent, canActivate:[authGuard]},
    { path:'task', component: TaskComponent},
    { path:'addtask/:id', component: AddTaskComponent, canActivate:[authGuard]},
    { path:'edittask/:id/:id', component: UpdateTaskComponent, canActivate:[authGuard]},
    { path:'signup', component: SignupComponent},
    { path:'login', component: LoginComponent},
    { path:'not-found', component: NotFoundComponent},
    { path:'**', redirectTo:'not-found'},
];

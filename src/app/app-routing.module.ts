import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AccountDetailComponent } from './account-detail/account-detail.component';
import { RegisterComponent } from './register/register.component';

const routes : Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'register', component: RegisterComponent},
  {path: 'home' , component: HomeComponent},
  {path: 'login', component: LoginComponent}, 
  {path: 'detail/:id', component: AccountDetailComponent},
]

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class AppRoutingModule { }

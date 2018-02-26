import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router'; 

import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { AuthGuard } from './auth/auth.guard';
import { EmployeesComponent } from './employees/employees.component';
import { RulesComponent } from './rules/rules.component';

export const appRoutes : Routes = [
 { path : 'home', component : EmployeesComponent, canActivate:[AuthGuard] },
 { path: 'users', component: EmployeesComponent, canActivate:[AuthGuard]  },
 { path: 'rules', component: RulesComponent, canActivate:[AuthGuard]  },
 { 
     path: 'sign-up', component : UserComponent,
     children: [{ path:'', component: SignUpComponent }]
 },
 { 
    path: 'login', component : UserComponent,
    children: [{ path:'', component: SignInComponent }]
 },
 { path : '', redirectTo:'/login', pathMatch : 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
   })

   export class RoutesModule {

}
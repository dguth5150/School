import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { EmployeeService } from './employees/shared/employee.service';
import { RuleService } from './rules/shared/rule.service';
import { AppComponent } from './app.component';
import { RoutesModule } from './routes'
import { ToastrModule } from '../../node_modules/ngx-toastr';
import { UserService } from './shared/user.service';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { appRoutes } from './routes';
import { AuthGuard } from './auth/auth.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth/auth.interceptor';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { HeaderComponent } from './header/header.component';
import { RulesComponent } from './rules/rules.component';
import { RuleComponent } from './rules/rule/rule.component';
import { RuleListComponent } from './rules/rule-list/rule-list.component';
import { NavbarService } from './shared/navbar.service';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    UserComponent,
    SignInComponent,
    EmployeesComponent,
    EmployeeListComponent,
    EmployeeComponent,
    HeaderComponent,
    RulesComponent,
    RuleComponent,
    RuleListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    RoutesModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService,EmployeeService,RuleService,NavbarService,AuthGuard,
  ,
  {
    provide : HTTP_INTERCEPTORS,
    useClass : AuthInterceptor,
    multi : true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

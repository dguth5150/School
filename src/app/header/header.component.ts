import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';
import { NavbarService } from '../shared/navbar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userClaims : any;

  constructor(private router : Router,private userService : UserService, public nav: NavbarService) { }

  ngOnInit() {
    this.userService.getUserClaims().subscribe((data : any)=>{
      this.userClaims = data;
    });
  }

  LogOut(){
    localStorage.removeItem('userToken');
    this.router.navigate(['/login']);
  }
}

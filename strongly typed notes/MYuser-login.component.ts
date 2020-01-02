import { Component, OnInit } from '@angular/core';
import { UserService } from '@svc/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { stringify } from '@angular/compiler/src/util';
import { User } from '../../../model/user.class';
import { CompileShallowModuleMetadata } from '@angular/compiler';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
  
})
export class UserLoginComponent implements OnInit {
  user:User =new User();
  title:string = "Login";
  constructor(private userSVC:UserService, private router:Router, private route:ActivatedRoute) { }
  authenticate(){
    this.userSVC.login(this.user).subscribe(resp =>{
      resp as User;
      console.log(resp);
    
    },
    err =>{
      console.log(err);
    });
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Models/user';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {}
  //loggedIn: boolean;
  //currentUser$: Observable<User>;


  constructor(public accountService: AccountService) { }

  ngOnInit(): void {
    //this.getCurrentUser;
    //this.accountService.currentUser$;

  }

  login(){
    this.accountService.login(this.model).subscribe({
      next: response => console.log(response),
      error: error => console.log(error)
    });
  };

  logout(){
    this.accountService.logout();
    //this.loggedIn = false;
  }

  /*
  getCurrentUser(){
    this.accountService.currentUser$.subscribe(user => {
      this.loggedIn = !!user;
    }, error => {
      console.log(error);
    });
  }*/




}

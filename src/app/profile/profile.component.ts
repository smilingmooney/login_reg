import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userName:string;
  constructor(private user:UserService) { }

  ngOnInit() {
    this.userName = this.user.username;
    console.log(this.user.username);
  }

}

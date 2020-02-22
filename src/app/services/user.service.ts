import { Injectable } from '@angular/core';
import {User} from '../models/user.model';

@Injectable()
  export class UserService {
    username:string;
    password:string;
    constructor() { }
    get user():string{
        return this.username;
      }
    set user(val: string){
        this.username = val;
      }
      get pwd():string{
        return this.password;
      }
      set pwd(val: string){
        this.password = val;
      }
  }
  
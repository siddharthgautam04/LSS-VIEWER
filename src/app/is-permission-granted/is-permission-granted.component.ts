import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import { userdata } from './usermodel';
@Component({
  selector: 'app-is-permission-granted',
  templateUrl: './is-permission-granted.component.html',
  styleUrls: ['./is-permission-granted.component.css']
})
export class IsPermissionGrantedComponent {

  user : userdata;

  result:boolean;

  constructor(){
    this.user ={} as userdata;
    this.result = false;
  }
  
  submit(data:any){
    console.log(data);
  }
}

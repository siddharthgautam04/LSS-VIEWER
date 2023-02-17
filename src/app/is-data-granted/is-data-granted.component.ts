import { Component } from '@angular/core';
import { userdata } from './usermodel';

@Component({
  selector: 'app-is-data-granted',
  templateUrl: './is-data-granted.component.html',
  styleUrls: ['./is-data-granted.component.css']
})
export class IsDataGrantedComponent {
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

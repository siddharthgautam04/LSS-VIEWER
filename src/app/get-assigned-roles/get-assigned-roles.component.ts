import { Component } from '@angular/core';
import { userdata } from './usermodel';

@Component({
  selector: 'app-get-assigned-roles',
  templateUrl: './get-assigned-roles.component.html',
  styleUrls: ['./get-assigned-roles.component.css']
})
export class GetAssignedRolesComponent {
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

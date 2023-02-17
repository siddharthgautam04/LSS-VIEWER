import { Component } from '@angular/core';
import { userdata } from './usermodel';

@Component({
  selector: 'app-get-permission-list',
  templateUrl: './get-permission-list.component.html',
  styleUrls: ['./get-permission-list.component.css']
})
export class GetPermissionListComponent {
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

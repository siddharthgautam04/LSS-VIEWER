import { Component } from '@angular/core';
import { userdata } from './usermodel';

@Component({
  selector: 'app-get-available-details-for-permission-list',
  templateUrl: './get-available-details-for-permission-list.component.html',
  styleUrls: ['./get-available-details-for-permission-list.component.css']
})
export class GetAvailableDetailsForPermissionListComponent {
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

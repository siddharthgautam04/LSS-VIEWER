import { Component } from '@angular/core';
import { userdata } from './usermodel';
import { IspermissiongrantedService } from '../services/ispermissiongranted.service';
@Component({
  selector: 'app-is-permission-granted',
  templateUrl: './is-permission-granted.component.html',
  styleUrls: ['./is-permission-granted.component.css']
})
export class IsPermissionGrantedComponent {

  user : userdata;

  result:any

  constructor(private apiService: IspermissiongrantedService){
    this.user ={} as userdata;
    console.log(this.user);
  }
  userInput(){
    this.user ={} as userdata;
    console.log(this.user);

  }
  
  submit(data:any){
    this.user = data
  //  console.log(this.user);
    this.apiService.usersGet(data).subscribe((res: any)=>{this.result=res.success
     console.log(res)});
  }
}

import { Component } from '@angular/core';
import { userdata } from './usermodel';

@Component({
  selector: 'app-get-preference-list',
  templateUrl: './get-preference-list.component.html',
  styleUrls: ['./get-preference-list.component.css']
})
export class GetPreferenceListComponent {
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

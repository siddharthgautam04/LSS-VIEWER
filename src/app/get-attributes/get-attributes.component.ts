import { Component } from '@angular/core';
import { userdata } from './usermodel';

@Component({
  selector: 'app-get-attributes',
  templateUrl: './get-attributes.component.html',
  styleUrls: ['./get-attributes.component.css']
})
export class GetAttributesComponent {
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

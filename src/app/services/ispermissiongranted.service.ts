import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { userdata } from '../is-permission-granted/usermodel';
import { IsPermissionGrantedComponent } from '../is-permission-granted/is-permission-granted.component';

@Injectable({
  providedIn: 'root'
})
export class IspermissiongrantedService {

  url:string

  usrData:userdata

  finalResult:any

  constructor(private ispermissiongrantedhttp :HttpClient ) {
    this.usrData={} as userdata 
    this.finalResult = true ;
    this.url=""
  }

  usersGet(data:any):any{
    this.url = "http://172.22.232.26:10409/1ASIU2MVS/offices/securityCheck/isPermGranted?";
    this.url+="Office="+data.office+"&Sign="+data.password+"&Orga="+data.organisation+"&PermApp="+data.permissionapplicaation+"&PermName="+data.permission_name
   //this.url += "Office=NCE1A0950&Sign=5364KA&Orga=1A&PermApp=AOM&PermName=OFFICE_RESTORE"
    console.log(this.url);
    return this.ispermissiongrantedhttp.get(this.url)
  }
}
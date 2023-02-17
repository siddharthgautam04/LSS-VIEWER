import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class IspermissiongrantedService {

  constructor(private ispermissiongranteshttp:HttpClient ) { }
  users(){
    return this.ispermissiongranteshttp.get ('');
  }
}

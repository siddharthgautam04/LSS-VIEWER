import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsPermissionGrantedComponent } from './is-permission-granted/is-permission-granted.component';
import { IsDataGrantedComponent } from './is-data-granted/is-data-granted.component';
import {GetPreferenceListComponent} from './get-preference-list/get-preference-list.component';
import {GetPermissionListComponent} from './get-permission-list/get-permission-list.component';
import {GetAvailableDetailsForPermissionListComponent} from './get-available-details-for-permission-list/get-available-details-for-permission-list.component';
import {GetAttributesComponent} from './get-attributes/get-attributes.component';
import {GetAssignedRolesComponent} from './get-assigned-roles/get-assigned-roles.component';
const routes: Routes = [
  {component:GetAttributesComponent,path:'app-get-attributes'},
  {component: IsPermissionGrantedComponent, path:'isPermissionGranted'},
  {component:IsDataGrantedComponent,path:'isDataGranted'},
  {component:GetPermissionListComponent,path:'app-get-permission-list'},
  {component:GetAvailableDetailsForPermissionListComponent,path:'app-get-available-details-for-permission-list'},
  {component:GetPreferenceListComponent,path:'app-get-preference-list'},
  {component:GetAssignedRolesComponent,path:'app-get-assigned-roles'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
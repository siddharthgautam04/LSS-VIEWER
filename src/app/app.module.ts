import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IsPermissionGrantedComponent } from './is-permission-granted/is-permission-granted.component';
import { IsDataGrantedComponent } from './is-data-granted/is-data-granted.component';
import {FormsModule} from '@angular/forms';
import { GetAttributesComponent } from './get-attributes/get-attributes.component';
import { GetPermissionListComponent } from './get-permission-list/get-permission-list.component';
import { GetAvailableDetailsForPermissionListComponent } from './get-available-details-for-permission-list/get-available-details-for-permission-list.component';
import { GetPreferenceListComponent } from './get-preference-list/get-preference-list.component';
import { GetAssignedRolesComponent } from './get-assigned-roles/get-assigned-roles.component';
import { RouterModule , Routes} from '@angular/router';

const appRoutes: Routes = [
  {component:GetAttributesComponent,path:'getAttribute'},
  {component: IsPermissionGrantedComponent, path:'isPermissionGranted'},
  {component:IsDataGrantedComponent,path:'isDataGranted'},
  {component:GetPermissionListComponent,path:'getPermissionList'},
  {component:GetAvailableDetailsForPermissionListComponent,path:'getAvialiableDetailsForPermissionList'},
  {component:GetPreferenceListComponent,path:'getPreferenceList'},
  {component:GetAssignedRolesComponent,path:'getAssignedRoles'},
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IsPermissionGrantedComponent,
    IsDataGrantedComponent,
    GetAttributesComponent,
    GetPermissionListComponent,
    GetAvailableDetailsForPermissionListComponent,
    GetPreferenceListComponent,
    GetAssignedRolesComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

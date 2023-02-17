import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsPermissionGrantedComponent } from './is-permission-granted.component';

describe('IsPermissionGrantedComponent', () => {
  let component: IsPermissionGrantedComponent;
  let fixture: ComponentFixture<IsPermissionGrantedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsPermissionGrantedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IsPermissionGrantedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAssignedRolesComponent } from './get-assigned-roles.component';

describe('GetAssignedRolesComponent', () => {
  let component: GetAssignedRolesComponent;
  let fixture: ComponentFixture<GetAssignedRolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAssignedRolesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAssignedRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

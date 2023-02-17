import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPermissionListComponent } from './get-permission-list.component';

describe('GetPermissionListComponent', () => {
  let component: GetPermissionListComponent;
  let fixture: ComponentFixture<GetPermissionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetPermissionListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetPermissionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAvailableDetailsForPermissionListComponent } from './get-available-details-for-permission-list.component';

describe('GetAvailableDetailsForPermissionListComponent', () => {
  let component: GetAvailableDetailsForPermissionListComponent;
  let fixture: ComponentFixture<GetAvailableDetailsForPermissionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAvailableDetailsForPermissionListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAvailableDetailsForPermissionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

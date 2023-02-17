import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IsDataGrantedComponent } from './is-data-granted.component';

describe('IsDataGrantedComponent', () => {
  let component: IsDataGrantedComponent;
  let fixture: ComponentFixture<IsDataGrantedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IsDataGrantedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IsDataGrantedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

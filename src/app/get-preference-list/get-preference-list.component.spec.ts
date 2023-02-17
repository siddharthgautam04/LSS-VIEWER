import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetPreferenceListComponent } from './get-preference-list.component';

describe('GetPreferenceListComponent', () => {
  let component: GetPreferenceListComponent;
  let fixture: ComponentFixture<GetPreferenceListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetPreferenceListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetPreferenceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

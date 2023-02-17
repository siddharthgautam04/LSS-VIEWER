import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAttributesComponent } from './get-attributes.component';

describe('GetAttributesComponent', () => {
  let component: GetAttributesComponent;
  let fixture: ComponentFixture<GetAttributesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAttributesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAttributesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

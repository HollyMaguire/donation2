import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationManagmentComponent } from './donation-managment.component';

describe('DonationManagmentComponent', () => {
  let component: DonationManagmentComponent;
  let fixture: ComponentFixture<DonationManagmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonationManagmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

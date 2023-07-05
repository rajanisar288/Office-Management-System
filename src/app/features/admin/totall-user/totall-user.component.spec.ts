import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotallUserComponent } from './totall-user.component';

describe('TotallUserComponent', () => {
  let component: TotallUserComponent;
  let fixture: ComponentFixture<TotallUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotallUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotallUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalManagersComponent } from './total-managers.component';

describe('TotalManagersComponent', () => {
  let component: TotalManagersComponent;
  let fixture: ComponentFixture<TotalManagersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalManagersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalManagersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

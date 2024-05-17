import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownValueComponent } from './dropdown-value.component';

describe('DropdownValueComponent', () => {
  let component: DropdownValueComponent;
  let fixture: ComponentFixture<DropdownValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropdownValueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropdownValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

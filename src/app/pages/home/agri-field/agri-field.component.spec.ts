import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgriFieldComponent } from './agri-field.component';

describe('AgriFieldComponent', () => {
  let component: AgriFieldComponent;
  let fixture: ComponentFixture<AgriFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgriFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgriFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalCaseComponent } from './total-case.component';

describe('TotalCaseComponent', () => {
  let component: TotalCaseComponent;
  let fixture: ComponentFixture<TotalCaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalCaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

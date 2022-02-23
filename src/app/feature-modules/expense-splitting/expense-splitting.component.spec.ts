import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseSplittingComponent } from './expense-splitting.component';

describe('ExpenseSplittingComponent', () => {
  let component: ExpenseSplittingComponent;
  let fixture: ComponentFixture<ExpenseSplittingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpenseSplittingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenseSplittingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

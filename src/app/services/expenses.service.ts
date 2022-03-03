import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

  constructor() { }

  splitExpense : BehaviorSubject<Boolean> = new BehaviorSubject(false);
  addExpenses(expense){
    console.log('expense is',expense);
  }
}

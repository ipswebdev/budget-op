import { Component, OnInit } from '@angular/core';
import { Expense } from 'src/app/models/expense';
import { ExpensesService } from 'src/app/services/expenses.service';

@Component({
  selector: 'app-add-expenses',
  templateUrl: './add-expenses.component.html',
  styleUrls: ['./add-expenses.component.scss']
})
export class AddExpensesComponent implements OnInit {

  expense :Expense = new Expense(0,false,'','');

  addedExpenses :Expense[] = []
  constructor(private expensesService: ExpensesService) { }

  ngOnInit(): void {
  }

  toggleSplit(){
    this.expense.split = !this.expense.split;
    this.expensesService.splitExpense.next(this.expense.split)
  }

  addExpense(){
    if(this.expense?.value){
      if(!this.expense.category){
        this.expense.category = 'General';
      }
      console.log(this.expense);
      this.expense.category = this.expense.category ? this.expense.category : 'General';
      this.expense.description = this.expense.description ? this.expense.description : '';
      this.expense.split = this.expense.split ? this.expense.split : false;
      this.expensesService.splitExpense.next(true);
      // this.expensesService.addExpenses(this.expense);
      this.addedExpenses.push(this.expense);
      
    }
  }
}

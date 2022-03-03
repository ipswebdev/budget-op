import { Component, OnInit } from '@angular/core';
import { ExpensesService } from 'src/app/services/expenses.service';

@Component({
  selector: 'app-add-expenses',
  templateUrl: './add-expenses.component.html',
  styleUrls: ['./add-expenses.component.scss']
})
export class AddExpensesComponent implements OnInit {

  expense = {
    category: '',
    description: '',
    value: 0,
    split: false,
  };

  addedExpenses : {
    category: string,
    description: string,
    value: number,
    split: boolean,
  }[] = []
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
      this.expense.category = this.expense.category ? this.expense.category : 'General';
      this.expense.description = this.expense.description ? this.expense.description : '';
      this.expense.split = this.expense.split ? this.expense.split : false;
      this.expensesService.splitExpense.next(true);
      this.expensesService.addExpenses(this.expense);
      //this.addedExpenses.push(this.expense);
      
    }
  }
}

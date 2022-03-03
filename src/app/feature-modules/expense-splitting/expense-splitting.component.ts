import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ExpensesService } from 'src/app/services/expenses.service';

@Component({
  selector: 'app-expense-splitting',
  templateUrl: './expense-splitting.component.html',
  styleUrls: ['./expense-splitting.component.scss']
})
export class ExpenseSplittingComponent implements OnInit {

  constructor(private expensesService : ExpensesService) { }

  expenseSplitSub : Subscription;
  person ={
    amount: 0,
    name: '' 
  };

  people = {};
  ngOnInit(): void {
    this.expenseSplitSub = this.expensesService.splitExpense.subscribe((value)=>{
      console.log('split Expense Value',value)
    });
  }
  removePeople(key){
    let person =  key.key;
    console.log(this.people[person]);
    this.people[person].isAdded = false;
    this.expensesService.splitExpense.next(false);
  }
  addPeople(name,amount){
    if(name && amount && amount > 0){
      this.expensesService.splitExpense.next(true);
      this.people[name] = {
        amount : amount,
        isAdded : true, 
      };
      this.person.name = '';
      this.person.amount = 0; 
      console.log(name,amount);
      this.expensesService.splitExpense.next(false);
    }
  }

}

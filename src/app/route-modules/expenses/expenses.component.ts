import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent implements OnInit {

  addExpense : boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  toggleExpense(){
    this.addExpense = !this.addExpense;
  }
  

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expense-splitting',
  templateUrl: './expense-splitting.component.html',
  styleUrls: ['./expense-splitting.component.scss']
})
export class ExpenseSplittingComponent implements OnInit {

  constructor() { }
  person ={
    amount: 0,
    name: '' 
  };
  
  people = {};
  ngOnInit(): void {
  }
  removePeople(key){
    let person =  key.key;
    console.log(this.people[person]);
    this.people[person].isAdded = false;
  }
  addPeople(name,amount){
    if(name && amount && amount > 0){
      this.people[name] = {
        amount : amount,
        isAdded : true, 
      };
      this.person.name = '';
      this.person.amount = 0; 
      console.log(name,amount);
    }
  }

}

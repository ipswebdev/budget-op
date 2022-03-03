import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddExpensesComponent } from './add-expenses.component';
import { FormsModule } from '@angular/forms';
import { ExpenseSplittingModule } from '../expense-splitting/expense-splitting.module';



@NgModule({
  declarations: [AddExpensesComponent],
  imports: [
    CommonModule,
    FormsModule,
    ExpenseSplittingModule
  ],
  exports: [AddExpensesComponent]
})
export class AddExpensesModule { }

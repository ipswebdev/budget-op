import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpensesRoutingModule } from './expenses-routing.module';
import { ExpensesComponent } from './expenses.component';
import { ExpenseSplittingModule } from 'src/app/feature-modules/expense-splitting/expense-splitting.module';


@NgModule({
  declarations: [ExpensesComponent],
  imports: [
    CommonModule,
    ExpensesRoutingModule,
    ExpenseSplittingModule
  ]
})
export class ExpensesModule { }

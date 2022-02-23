import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExpenseSplittingComponent } from './expense-splitting.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [ExpenseSplittingComponent],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [ExpenseSplittingComponent]
})
export class ExpenseSplittingModule { }

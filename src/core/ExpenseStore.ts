import type { Expense, Category } from "./types";

export class ExpenseStore {
  private expenses: Expense[];

  constructor(initialExpenses: Expense[] = []) {
    this.expenses = initialExpenses;
  }

  addExpense(amount: number, category: Category) {
    const expense: Expense = {
      id: crypto.randomUUID(),
      amount,
      category,
      date: Date.now(),
    };

    this.expenses = [...this.expenses, expense];
  }

  getExpenses(): Expense[] {
    return [...this.expenses];
  }

  getTotal(): number {
    return this.expenses.reduce(
      (sum, expense) => sum + expense.amount,
      0
    );
  }
}
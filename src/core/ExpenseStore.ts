import type { Expense, Category } from "./types";
 
export class ExpenseStore {
  private expenses: Expense[];
  private subscribers: (() => void)[] = [];

  constructor(initialExpenses: Expense[] = []) {
    this.expenses = initialExpenses;
  }

  subscribe(callback: () => void) {
    this.subscribers.push(callback);
    return () => {
      this.subscribers = this.subscribers.filter((cb) => cb !== callback);
    };
  }

  notify() {
    this.subscribers.forEach((cb) => cb());
  }

  addExpense(amount: number, category: Category) {
    const expense: Expense = {
      id: crypto.randomUUID(),
      amount,
      category,
      date: Date.now(),
    };
    [...this.expenses, expense];
    this.expenses = [...this.expenses, expense];
    this.notify();
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
  
  deleteExpense(id: string) {
    this.expenses = this.expenses.filter((expense) => expense.id !== id);
    this.notify();
  }
}
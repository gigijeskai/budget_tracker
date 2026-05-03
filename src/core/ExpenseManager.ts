import type { Expense, Category } from "./types";

const STORAGE_KEY = 'expense_manager_data';

export class ExpenseManager {
    private expenses: Expense[] = [];

    constructor(){
        this.loadFromStorage();    
    }

    //ADDING EXPENSE
    addExpense(amount: number, category: Category) {
        const newExpense: Expense = {
            id: crypto.randomUUID(),
            amount,
            category,
            date: Date.now(),
        };
        this.expenses.push(newExpense);
        this.saveToStorage();
    }

    // SAVE ON LOCALSTORAGE
    private saveToStorage() {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(this.expenses));
    }

    // LOAD FROM LOCALSTORAGE
    private loadFromStorage(){
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            this.expenses = JSON.parse(saved);
        }
    }

    // GET ALL EXPENSES
    getExpenses() {
        return[...this.expenses];
    }

    // CALCULATE TOTAL
    getTotal(): number {
        return this.expenses.reduce((acc, curr) => acc + curr.amount, 0)
    }

}
   
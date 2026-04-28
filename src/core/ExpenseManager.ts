import type { Expense, Category } from "./types";

const STORAGE_KEY = 'expense_manager_data';

export class ExpenseManager {
    private expenses: Expense[] = [];


    loadFromStorage(): void {
        const storeData = localStorage.getItem(STORAGE_KEY)
        if (storeData) {
            try {
                const parseData = JSON.parse(storeData);
                this.expenses = parseData
                console.log('correct upload data!');
            } catch (error) {
              console.error('Error to parsing data by localstorage:', error);
            }
        } else {
            console.warn('Not find data on the storage.')
        }
    }

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
    private saveToStorage(){
        const saved = localStorage.getItem("my_expense");
        if (saved) {
            this.expenses = JSON.parse(saved);
        }
    }

    // GET ALL EXPENSE
    getExpenses() {
        return[...this.expenses];
    }

    // CALCULATE TOTAL
    getTotal(): number {
        return this.expenses.reduce((acc, curr) => acc + curr.amount, 0)
    }
}
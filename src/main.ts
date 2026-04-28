import { ExpenseManager } from "./core/ExpenseManager";

const manager = new ExpenseManager();

if (manager.getExpenses().length === 0) {
    manager.addExpense(10, 'Food')
}

console.log("Actual Expenses:", manager.getExpenses());
console.log("Total:", manager.getTotal());


import type { Category, Expense } from "./core/types";
import { ExpenseManager } from "./core/ExpenseManager";

const input = document.getElementById('amount-input') as HTMLInputElement;
const categorySelect = document.getElementById('category-input') as HTMLSelectElement;
const addButton = document.getElementById('add-btn') as HTMLButtonElement;
const expenseList = document.querySelector('#expense-list') as HTMLUListElement;
const totalBalance = document.getElementById('total-display') as HTMLDivElement;
const expense = new ExpenseManager();

window.addEventListener('DOMContentLoaded', () => {
    renderList();
    renderTotal();
});

addButton.addEventListener('click', () => {
    const amount: number = parseFloat(input.value);
    const category = categorySelect.value as Category;

    expense.addExpense(amount, category);
    input.value = '';
    renderList();
    renderTotal();
});

const renderList = () => {

const expenses = expense.getExpenses();
expenseList.innerHTML = '';
expenses.forEach((exp: Expense) => {
    const li = document.createElement('li');
    li.textContent = `${exp.category}: €${exp.amount.toFixed(2)} - ${new Date(exp.date).toLocaleDateString()}`;
    expenseList.appendChild(li);
});

}

const renderTotal = () => {
    
    const total = expense.getTotal();
    totalBalance.textContent = `Total: €${total.toFixed(2)}`;
}
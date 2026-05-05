import type { Expense } from "../core/types";

export const renderList = (expenses: Expense[]) => {
    const listElement = document.getElementById('expense-list') as HTMLUListElement;

    if (!listElement) return;

    listElement.innerHTML = '';

    expenses.forEach((expense) => {
        const item = document.createElement('li');
        item.textContent = `${expense.category}: €${expense.amount.toFixed(2)}`;
        listElement.appendChild(item);
    });
};

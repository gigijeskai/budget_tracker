import { ExpenseStore } from "../core/ExpenseStore";

export function renderList(manager: ExpenseStore) {
    const list = document.getElementById('expense-list') as HTMLUListElement;

    list.innerHTML = '';

    manager.getExpenses().forEach(exp => {
        const li = document.createElement('li');
        li.textContent = `${exp.category}: €${exp.amount.toFixed(2)} - ${new Date(exp.date).toLocaleDateString()}`;
        list.appendChild(li);
    });
}

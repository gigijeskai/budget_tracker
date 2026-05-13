import type { Expense } from "../core/types";

export const renderList = (expenses: Expense[], onDelete: (id: string) => void) => {
    const listElement = document.getElementById('expense-list') as HTMLUListElement;
    

    if (!listElement) return;

    listElement.innerHTML = '';

    expenses.forEach((expense) => {
        const item = document.createElement('li');

        item.textContent = `${expense.category}: €${expense.amount.toFixed(2)}`;
        listElement.appendChild(item);

        const btnDelete = document.createElement('button');
    btnDelete.textContent = '🗑️';
    btnDelete.classList.add('delete-btn');

        btnDelete.onclick = () => {
            onDelete(expense.id);
        };

        item.appendChild(btnDelete);
        listElement.appendChild(item);
    });

    
};

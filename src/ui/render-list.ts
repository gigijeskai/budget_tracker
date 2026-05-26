import type { Expense, Category } from "../core/types";

export const renderList = (expenses: Expense[]) => {
    const listElement = document.getElementById('expense-list') as HTMLUListElement;
   
    if (!listElement) return;

    listElement.innerHTML = '';

    expenses.forEach((expense) => {
        const item = document.createElement('li');

        item.textContent = `${expense.category}: €${expense.amount.toFixed(2)}`;
        listElement.appendChild(item);

        const btnEdit = document.createElement('button');
        btnEdit.textContent = '✏️';
        btnEdit.classList.add('edit-btn');
        btnEdit.dataset.id = expense.id;
        item.appendChild(btnEdit);
        

        const btnDelete = document.createElement('button');
        btnDelete.textContent = '🗑️';
        btnDelete.classList.add('delete-btn');
        btnDelete.dataset.id = expense.id;
        item.appendChild(btnDelete);
        
    });
};

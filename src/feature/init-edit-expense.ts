import { ExpenseStore } from '../core/ExpenseStore';
import type { Category } from '../core/types';

export function initEditExpense(manager: ExpenseStore) {
    let editingId: string | null = null;
    const listElement = document.getElementById('expense-list') as HTMLUListElement;
    const expenseAmountField = document.getElementById('amount-input') as HTMLInputElement;
    const expenseCategoryField = document.getElementById('category-input') as HTMLSelectElement;
    const saveButton = document.getElementById('add-btn') as HTMLButtonElement;

    listElement.addEventListener('click', (event) => {
        const target = event.target as HTMLElement;

        const editBtn = target.closest('.edit-btn') as HTMLButtonElement | null;
        if (editBtn) {
            const id = editBtn.dataset.id;
            if (!id) return;

            const expense = manager.getExpenses().find(exp => exp.id === id);
            if (!expense) return;

            editingId = id;
            expenseAmountField.value = expense.amount.toString();
            expenseCategoryField.value = expense.category;
            saveButton.textContent = 'Save';
            return; 
        }

       
        const deleteBtn = target.closest('.delete-btn') as HTMLButtonElement | null;
        if (deleteBtn) {
            const id = deleteBtn.dataset.id;
            if (!id) return;

            
            console.log("Elimina elemento con ID:", id);
            manager.deleteExpense(id);
            return;
        }
    });

    
    saveButton.addEventListener('click', () => {
        const amount = parseFloat(expenseAmountField.value);
        const category = expenseCategoryField.value as Category;

        if (isNaN(amount) || !category) {
            alert('Please enter a valid amount and select a category.');
            return;
        }

        if (editingId) {
            manager.editExpense(editingId, amount, category);
            editingId = null;
            saveButton.textContent = 'Add';
        } else {
            manager.addExpense(amount, category);
        }

        expenseAmountField.value = '';
        expenseCategoryField.value = '';
    });
}

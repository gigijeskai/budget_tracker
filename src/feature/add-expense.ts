import { ExpenseStore } from "../core/ExpenseStore";
import type { Category } from "../core/types";

export function initAddExpense(manager: ExpenseStore) {
    const input = document.getElementById('amount-input') as HTMLInputElement;
    const categorySelect = document.getElementById('category-input') as HTMLSelectElement;
    const addButton = document.getElementById('add-btn') as HTMLButtonElement;

    addButton.addEventListener('click', () => {
        const amount = parseFloat(input.value);
        const category = categorySelect.value as Category;

        if (isNaN(amount) || amount <= 0) return;
        
        manager.addExpense(amount, category);
        
        input.value = '';
    });
}
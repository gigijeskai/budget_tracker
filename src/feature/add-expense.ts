import { ExpenseStore } from "../core/ExpenseStore";
import type { Category } from "../core/types";

export function initAddExpense(
    manager: ExpenseStore,
    render: () => void
) {
    const input = document.getElementById('amount-input') as HTMLInputElement;
    const categorySelect = document.getElementById('category-input') as HTMLSelectElement;
    const addButton = document.getElementById('add-btn') as HTMLButtonElement;

    addButton.addEventListener('click', () => {
        manager.addExpense(
            parseFloat(input.value),
            categorySelect.value as Category
        );

        input.value = '';
        render();
    });
}
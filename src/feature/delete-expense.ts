import { ExpenseStore } from "../core/ExpenseStore";

export function initDeleteExpense(manager: ExpenseStore) {
    const listElement = document.getElementById('expense-list') as HTMLUListElement;
    if (!listElement) return;

    listElement.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;
        if (target.classList.contains('delete-btn')) {
            const id = target.parentElement?.dataset.id;
            if (id) {
                manager.deleteExpense(id);
            }
        }
    });
}
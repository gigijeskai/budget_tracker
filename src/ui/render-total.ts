import { ExpenseStore } from "../core/ExpenseStore";

export function renderTotal(manager: ExpenseStore) {
    const total = document.getElementById('total-display') as HTMLDivElement;

    total.textContent = `Total: €${manager.getTotal().toFixed(2)}`;
}

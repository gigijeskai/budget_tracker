import type { Expense } from "../core/types";
import { groupByCategory } from '../utils/group-by-category'

export function renderSummary(expenses: Expense[]): void {
    const container = document.getElementById('summary-list');

    if (!container) return;

    const grouped = groupByCategory(expenses);

    container.innerHTML = '';

    Object.entries(grouped).forEach(([category, total]) => {
        const row = document.createElement('div');

        row.innerHTML = `
            <span>${category}</span>
            <span>€${total.toFixed(2)}</span>
        `;

        container.appendChild(row);
    });
}
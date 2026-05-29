import type { Expense } from '../core/types';

export function exportExpenses(expenses: Expense[]): void {

    const jsonString = JSON.stringify(expenses, null, 4);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'bck-expenses.json';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}


export function initExportExpense(getExpenses: () => Expense[]): void {
    const btnExport = document.getElementById('btn-export') as HTMLButtonElement;

    if (!btnExport) return
    btnExport.addEventListener('click', () => {
        const expenses = getExpenses();
        exportExpenses(expenses);
    });
}
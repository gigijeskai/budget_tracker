import type { Expense, Category } from '../core/types';

export function groupByCategory(expenses: Expense[]): Record<Category, number> {
    return expenses.reduce((acc, expense) => {
        if (!acc[expense.category]) {
            acc[expense.category] = 0;
        }
        acc[expense.category] += expense.amount;
        return acc;
    }, {} as Record<Category, number>);
}   
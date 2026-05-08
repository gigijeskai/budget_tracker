import type { Expense } from "../core/types";
import { getStartOf, getEndOf } from "./period-selector";

export function filterByRange(expenses: Expense[], mode: string, currentDate: Date): Expense[] {
    const start = getStartOf(currentDate, mode).getTime();
    const end = getEndOf(currentDate, mode).getTime();

    return expenses.filter(expense => expense.date >= start && expense.date <= end);
}
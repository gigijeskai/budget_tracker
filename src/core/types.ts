export type Category = "Food" | "Tranport" | "Entertainment" | "Utilities" | "Health" | "Education" | "Other" | "Test";

export type Timeframe = 'today' | 'week' | 'month' | 'year' | 'all';

export interface Expense {
    id: string;
    amount: number;
    category: Category;
    date: number;
    description?: string;
}

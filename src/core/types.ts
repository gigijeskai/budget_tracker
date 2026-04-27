export type Category = "Food" | "Tranport" | "Entertainment";

export interface Expense {
    id: string;
    amount: number;
    category: Category;
    date: number;
    description?: string;
}
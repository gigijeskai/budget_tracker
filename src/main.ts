import { ExpenseStore } from "./core/ExpenseStore";
import { initAddExpense } from "./feature/add-expense";
import { renderList } from "./ui/render-list";
import { renderTotal } from "./ui/render-total";

const store = new ExpenseStore();
store.subscribe(() => {
    renderList(store.getExpenses());
    renderTotal(store.getTotal());
});

initAddExpense(store);







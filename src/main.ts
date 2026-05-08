import { ExpenseStore } from "./core/ExpenseStore";
import { initAddExpense } from "./feature/add-expense";
import { renderList } from "./ui/render-list";
import { renderTotal } from "./ui/render-total";
import { initPeriodPicker } from "./feature/dynamic-period-select";

const store = new ExpenseStore();

    renderList(store.getExpenses());
    renderTotal(store.getTotal());
    

    initAddExpense(store);
    initPeriodPicker(store);







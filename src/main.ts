import { ExpenseStore } from "./core/ExpenseStore";
import { renderList } from "./ui/render-list";
import { renderTotal } from "./ui/render-total";
import { initPeriodPicker } from "./feature/dynamic-period-select";
import { initEditExpense } from "./feature/init-edit-expense";
import { loadExpenses, saveExpenses } from "./services/storage";

const saveData = loadExpenses();
const store = new ExpenseStore(saveData);

store.subscribe(() => {
    const data = store.getExpenses();
    saveExpenses(data);
    const filteredExpenses = store.getExpenses(); 
    renderList(filteredExpenses);
    renderTotal(store.getTotal());
});

initPeriodPicker(store);
initEditExpense(store);

store.notify();







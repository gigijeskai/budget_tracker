import { ExpenseStore } from "./core/ExpenseStore";
import { initAddExpense } from "./feature/add-expense";
import { renderList } from "./ui/render-list";
import { renderTotal } from "./ui/render-total";
import { initPeriodPicker } from "./feature/dynamic-period-select";
import { loadExpenses, saveExpenses } from "./services/storage";

const saveData = loadExpenses();
const store = new ExpenseStore(saveData);

store.subscribe(() => {
    const data = store.getExpenses();
    saveExpenses(data);
    const filteredExpenses = store.getExpenses(); 
    renderList(filteredExpenses, (id) => store.deleteExpense(id));
    renderTotal(store.getTotal());
});

initAddExpense(store);
initPeriodPicker(store);

store.notify();







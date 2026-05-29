import { ExpenseStore } from "./core/ExpenseStore";
import { initPeriodPicker } from "./feature/dynamic-period-select";
import { initEditExpense } from "./feature/init-edit-expense";
import { loadExpenses, saveExpenses } from "./services/storage";
import { initExportExpense } from "./feature/init-export-expense";

const saveData = loadExpenses();
const store = new ExpenseStore(saveData);

store.subscribe(() => {
    const data = store.getExpenses();
    saveExpenses(data);
});

initPeriodPicker(store);
initEditExpense(store);
initExportExpense(() => store.getExpenses());

store.notify();







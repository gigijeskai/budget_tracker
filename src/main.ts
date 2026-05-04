import { ExpenseStore } from "./core/ExpenseStore";
import { initPeriodPicker } from "./feature/dynamic-period-select";
import { initAddExpense } from "./feature/add-expense";
import { renderList } from "./ui/render-list";
import { renderTotal } from "./ui/render-total";

const expenseManager = new ExpenseStore();

const render = () => {
    renderList(expenseManager);
    renderTotal(expenseManager);
}

window.addEventListener('DOMContentLoaded', () => {

    initAddExpense(expenseManager, render);
    initPeriodPicker();

    render();
});




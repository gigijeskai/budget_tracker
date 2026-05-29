import { ExpenseStore } from "../core/ExpenseStore";
import { filterByRange } from "../utils/filter-by-range";
import { renderList } from "../ui/render-list";
import { renderTotal } from "../ui/render-total";
import { renderChart } from "../ui/render-chart";

export function initPeriodPicker(manager: ExpenseStore) {
  let mode = "day";
  let currentDate = new Date();

  const label = document.getElementById("period-label") as HTMLDivElement;
  const prev = document.getElementById("prev-period") as HTMLButtonElement;
  const next = document.getElementById("next-period") as HTMLButtonElement;
  const tabs = document.querySelectorAll(".period-tab") as NodeListOf<HTMLDivElement>;

  function getWeekNumber(date: any) {
    const d: any = new Date(Date.UTC(
      date.getFullYear(),
      date.getMonth(),
      date.getDate()
    ));

    const dayNum = d.getUTCDay() || 7;
    d.setUTCDate(d.getUTCDate() + 4 - dayNum);

    const yearStart: any = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));

    return Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
  }

  function updatePeriodLabel() {
    switch (mode) {
      case "day":
        label.textContent = currentDate.toLocaleDateString("en-US", {
          day: "numeric",
          month: "long",
          year: "numeric"
        });
        break;

      case "week":
        label.textContent =
          `Week ${getWeekNumber(currentDate)} • ${currentDate.getFullYear()}`;
        break;

      case "month":
        label.textContent =
          currentDate.toLocaleDateString("en-US", {
            month: "long",
            year: "numeric"
          });
        break;

      case "year":
        label.textContent = currentDate.getFullYear().toString();
        break;

      case "total":
        label.textContent = "All Time";
        break;
    }
    prev.disabled = mode === "total";
    next.disabled = mode === "total";

    const filtered = filterByRange(
      manager.getExpenses(),
      mode,
      currentDate
    );
    renderList(filtered);
    renderTotal(filtered.reduce((sum, exp) => sum + exp.amount, 0));
    renderChart(filtered);
  }

  function movePeriod(step) {
    switch (mode) {
      case "day":
        currentDate.setDate(currentDate.getDate() + step);
        break;
      case "week":
        currentDate.setDate(currentDate.getDate() + step * 7);
        break;
      case "month":
        currentDate.setMonth(currentDate.getMonth() + step);
        break;
      case "year":
        currentDate.setFullYear(currentDate.getFullYear() + step);
        break;
      case "total":
        return;
    }
    updatePeriodLabel();
  }

  label.textContent = new Date().toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });
  updatePeriodLabel();


  prev.addEventListener("click", () => movePeriod(-1));
  next.addEventListener("click", () => movePeriod(1));


  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      mode = tab.dataset.mode;
    });
  });
  manager.subscribe(updatePeriodLabel);

}
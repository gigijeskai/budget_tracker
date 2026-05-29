import { Chart, registerables } from 'chart.js'
import { groupByCategory } from '../utils/group-by-category'
import type { Expense } from '../core/types'

Chart.register(...registerables)

let myChart: Chart | null = null;

export function renderChart(expenses: Expense[]): void {
    const canvas = document.getElementById('expense-chart') as HTMLCanvasElement;
    if (!canvas) return;

    if (myChart) {
        myChart.destroy();
    }

    const groupedData = groupByCategory(expenses);

    const labels = Object.keys(groupedData);
    const dataValues = Object.values(groupedData);

    if (labels.length === 0) {
        return;
    }

    myChart = new Chart(canvas, {
        type: 'doughnut',
        data: {
            labels: labels,
            datasets: [{
                label: 'Expenses by Category',
                data: dataValues,
                backgroundColor: [
                    '#f80036ff', '#35aeffff', '#FFCE56', '#3dffffff', '#702afcff', '#ff8000ff'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
}
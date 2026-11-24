export function initViewSwitcher(): void {
    const btnList = document.getElementById('btn-show-list') as HTMLButtonElement;
    const btnSummary = document.getElementById('btn-show-summary') as HTMLButtonElement;
    const btnChart = document.getElementById('btn-show-chart') as HTMLButtonElement;

    const containerList = document.getElementById('container-list') as HTMLUListElement;
    const containerSummary = document.getElementById('container-summary') as HTMLDivElement;
    const containerChart = document.getElementById('container-chart') as HTMLDivElement;

    if (
        !btnList ||
        !btnSummary ||
        !btnChart ||
        !containerList ||
        !containerSummary ||
        !containerChart
    ) return;

    btnList.addEventListener('click', () => {
        btnList.classList.add('active');
        btnSummary.classList.remove('active');
        btnChart.classList.remove('active');

        containerList.classList.remove('is-hidden');
        containerSummary.classList.add('is-hidden');
        containerChart.classList.add('is-hidden');
    });

    btnSummary.addEventListener('click', () => {
        btnSummary.classList.add('active');
        btnList.classList.remove('active');
        btnChart.classList.remove('active');

        containerSummary.classList.remove('is-hidden');
        containerList.classList.add('is-hidden');
        containerChart.classList.add('is-hidden');
    });

    btnChart.addEventListener('click', () => {
        btnChart.classList.add('active');
        btnList.classList.remove('active');
        btnSummary.classList.remove('active');

        containerChart.classList.remove('is-hidden');
        containerList.classList.add('is-hidden');
        containerSummary.classList.add('is-hidden');
    });
}
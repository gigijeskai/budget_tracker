export function initViewSwitcher(): void {
    const btnList =  document.getElementById('btn-show-list') as HTMLButtonElement;
    const btnChart = document.getElementById('btn-show-chart') as HTMLButtonElement;

    const containerList = document.getElementById('container-list') as HTMLUListElement;
    const containerChart = document.getElementById('container-chart') as HTMLDivElement;

    if (!btnList || !btnChart || !containerList || !containerChart) return;

    btnList.addEventListener('click', () => {
        btnList.classList.add('active');
        btnChart.classList.remove('active');

        containerList.classList.remove('is-hidden');
        containerChart.classList.add('is-hidden');
    });

    btnChart.addEventListener('click', () => {
        btnChart.classList.add('active');
        btnList.classList.remove('active');

        containerChart.classList.remove('is-hidden');
        containerList.classList.add('is-hidden');
    });
}
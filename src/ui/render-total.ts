export function renderTotal(amount : number) {
    const display = document.getElementById('total-display') as HTMLDivElement;

if (display) display.textContent = `Total: €${amount.toFixed(2)}`;
}

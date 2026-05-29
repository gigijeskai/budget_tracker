import type { Expense } from '../core/types';

interface StoreInterface {
    importAllExpenses: (expenses: Expense[]) => void;
}

export function initImportExpense(store: StoreInterface): void {

    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'application/json';
    input.style.display = 'none';

    input.addEventListener('change', () => {
        const file = input.files?.[0];
        if (!file) return;

        const reader = new FileReader();

        reader.onload = (e) => {
            try {
                const resultString = e.target?.result as string;

                if (typeof resultString !== 'string') {
                    alert('File content is not a valid string.');
                    return;
                }

                const parseData = JSON.parse(resultString);

                if (!Array.isArray(parseData)) {
                    alert('File content is not a valid array of expenses.');
                    return;
                }

                store.importAllExpenses(parseData as Expense[]);

              console.log("import complete with success");
              
            } catch (error) {
                alert('Failed to import expenses: ' + (error as Error).message);
            }
        };

        reader.readAsText(file);
    });

    input.click();
}
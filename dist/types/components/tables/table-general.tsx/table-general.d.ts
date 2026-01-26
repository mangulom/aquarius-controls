export type TableColor = 'PRIMARY' | 'SUCCESS' | 'DANGER' | 'WARNING' | 'INFO' | 'SECONDARY' | 'DARK' | 'LIGHT';
export declare class TableGeneral {
    /** Array de objetos a mostrar */
    data: any[];
    /** Columnas: { key: string, label: string, color?: TableColor } */
    columns: {
        key: string;
        label: string;
        color?: TableColor;
    }[];
    sortKey: string;
    sortAsc: boolean;
    private sortByColumn;
    private getSortedData;
    render(): any;
}

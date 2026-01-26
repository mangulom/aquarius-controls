export type TableColor = 'PRIMARY' | 'SUCCESS' | 'DANGER' | 'WARNING' | 'INFO' | 'SECONDARY' | 'DARK' | 'LIGHT';
export declare class TableGeneral {
    /** Columnas: { key: string, label: string, color?: TableColor } */
    columns: {
        key: string;
        label: string;
        color?: TableColor;
    }[];
    /** Datos: arreglo de objetos, pasado desde la app consumidora */
    data: any[];
    sortedData: any[];
    sortKey: string;
    sortAsc: boolean;
    watchData(): void;
    componentWillLoad(): void;
    private sortByColumn;
    render(): any;
}

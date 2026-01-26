export type TableColor = 'PRIMARY' | 'SUCCESS' | 'DANGER' | 'WARNING' | 'INFO' | 'SECONDARY' | 'DARK' | 'LIGHT';
export declare class TableGeneral {
    /** Columnas: { key: string, label: string, color } */
    columns: any[] | string;
    /** Datos: arreglo de objetos */
    data: any[] | string;
    sortedData: any[];
    sortKey: string;
    sortAsc: boolean;
    /** Convierte strings JSON a arrays reales */
    private parseProp;
    watchProps(): void;
    componentWillLoad(): void;
    private sortByColumn;
    render(): any;
}

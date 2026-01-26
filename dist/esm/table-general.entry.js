import { r as registerInstance, h } from './index-vX7UoY7t.js';

const tableGeneralCss = () => `:host{font-family:var(--app-font-family, Arial, sans-serif);display:block}.table-responsive{overflow-x:auto}.custom-table{width:100%;border-collapse:collapse}.custom-table thead tr{background-color:#f8f9fa}.custom-table th,.custom-table td{padding:12px 16px;text-align:left;cursor:pointer;border:1px solid #dee2e6;transition:background-color 0.2s ease}.custom-table tbody tr:nth-child(even){background-color:#f2f2f2}.custom-table tbody tr:hover{background-color:#e0e0e0}.th-primary{background-color:#0d6efd;color:white}.th-success{background-color:#198754;color:white}.th-danger{background-color:#dc3545;color:white}.th-warning{background-color:#ffc107;color:#212529}.th-info{background-color:#0dcaf0;color:#212529}.th-secondary{background-color:#6c757d;color:white}.th-dark{background-color:#212529;color:white}.th-light{background-color:#f8f9fa;color:#212529}`;

const TableGeneral = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    /** Array de objetos a mostrar */
    data = [];
    /** Columnas: { key: string, label: string, color?: TableColor } */
    columns = [];
    sortKey = '';
    sortAsc = true;
    sortByColumn(key) {
        if (this.sortKey === key) {
            this.sortAsc = !this.sortAsc;
        }
        else {
            this.sortKey = key;
            this.sortAsc = true;
        }
    }
    getSortedData() {
        if (!this.sortKey)
            return this.data;
        return [...this.data].sort((a, b) => {
            const valA = a[this.sortKey];
            const valB = b[this.sortKey];
            if (valA < valB)
                return this.sortAsc ? -1 : 1;
            if (valA > valB)
                return this.sortAsc ? 1 : -1;
            return 0;
        });
    }
    render() {
        const sortedData = this.getSortedData();
        return (h("div", { key: '907c9c57adce07f3afc34f919e21326eaa3a1cf0', class: "table-responsive" }, h("table", { key: 'dee40dbdfd6e652642ab64604f6956573854bc8c', class: "custom-table" }, h("thead", { key: 'ad217f43640144d9b0ac89ba65eb057e3957296a' }, h("tr", { key: '690efe6fc6702976bf52058542ce1213be3b5640' }, this.columns.map(col => (h("th", { class: col.color ? `th-${col.color.toLowerCase()}` : '', onClick: () => this.sortByColumn(col.key) }, col.label, this.sortKey === col.key && (h("span", null, this.sortAsc ? ' ▲' : ' ▼'))))))), h("tbody", { key: '70f141d9cf69396330327436e76fe03f032d9741' }, sortedData.map(row => (h("tr", null, this.columns.map(col => (h("td", null, row[col.key]))))))))));
    }
};
TableGeneral.style = tableGeneralCss();

export { TableGeneral as table_general };

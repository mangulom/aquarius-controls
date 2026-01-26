import { r as registerInstance, h } from './index-BrbRs0k0.js';

const tableGeneralCss = () => `:host{font-family:var(--app-font-family, Arial, sans-serif);display:block}.table-responsive{overflow-x:auto;margin:1rem 0}.styled-table{width:100%;border-collapse:separate;border-spacing:0;border-radius:0.5rem;overflow:hidden;box-shadow:0 0.25rem 0.5rem rgba(0,0,0,0.1)}.styled-table th,.styled-table td{padding:0.75rem 1rem;text-align:left;border-bottom:1px solid #dee2e6;transition:background-color 0.2s ease;cursor:pointer}.styled-table tbody tr:nth-child(even){background-color:#f8f9fa}.styled-table tbody tr:hover{background-color:#e9ecef}.styled-table thead tr th:first-child{border-top-left-radius:0.5rem}.styled-table thead tr th:last-child{border-top-right-radius:0.5rem}.th-primary{background-color:#0d6efd;color:white}.th-success{background-color:#198754;color:white}.th-danger{background-color:#dc3545;color:white}.th-warning{background-color:#ffc107;color:#212529}.th-info{background-color:#0dcaf0;color:#212529}.th-secondary{background-color:#6c757d;color:white}.th-dark{background-color:#212529;color:white}.th-light{background-color:#f8f9fa;color:#212529;border:1px solid #ced4da}.sort-indicator{margin-left:4px;font-size:0.75rem}`;

const TableGeneral = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    /** Columnas: { key: string, label: string, color } */
    columns = [];
    /** Datos: arreglo de objetos */
    data = [];
    sortedData = [];
    sortKey = '';
    sortAsc = true;
    /** Convierte strings JSON a arrays reales */
    parseProp(prop) {
        if (typeof prop === 'string') {
            try {
                return JSON.parse(prop);
            }
            catch {
                return [];
            }
        }
        return prop || [];
    }
    watchProps() {
        this.sortedData = this.parseProp(this.data);
    }
    componentWillLoad() {
        this.columns = this.parseProp(this.columns);
        this.sortedData = this.parseProp(this.data);
    }
    sortByColumn(key) {
        if (this.sortKey === key) {
            this.sortAsc = !this.sortAsc;
        }
        else {
            this.sortKey = key;
            this.sortAsc = true;
        }
        const dataArr = this.parseProp(this.data);
        this.sortedData = [...dataArr].sort((a, b) => {
            const valA = a[key];
            const valB = b[key];
            if (valA == null)
                return 1;
            if (valB == null)
                return -1;
            if (valA < valB)
                return this.sortAsc ? -1 : 1;
            if (valA > valB)
                return this.sortAsc ? 1 : -1;
            return 0;
        });
    }
    render() {
        const columnsArr = this.parseProp(this.columns);
        return (h("div", { key: '1fdc7ca1222cd4903606d233cdc07a7ec4c5d78b', class: "table-responsive" }, h("table", { key: 'd81fa2c21f669c1f552d3e3b05a2996ffdd8bb43', class: "styled-table" }, h("thead", { key: '06342516323fe5d091eb595f657d28b0bd31e5a8' }, h("tr", { key: 'c4a4f4c6d4e625bbe9e1012541c4dba234085a2e' }, columnsArr.map(col => (h("th", { class: col.color ? `th-${col.color.toLowerCase()}` : '', onClick: () => this.sortByColumn(col.key) }, col.label, this.sortKey === col.key && (h("span", { class: "sort-indicator" }, this.sortAsc ? ' ▲' : ' ▼'))))))), h("tbody", { key: '84592feecf6c07a11b0b2145a476cc8aea4ee31e' }, this.sortedData.map(row => (h("tr", null, columnsArr.map(col => (h("td", null, row[col.key]))))))))));
    }
    static get watchers() { return {
        "data": [{
                "watchProps": 0
            }],
        "columns": [{
                "watchProps": 0
            }]
    }; }
};
TableGeneral.style = tableGeneralCss();

export { TableGeneral as table_general };

import { r as registerInstance, h } from './index-BrbRs0k0.js';

const tableGeneralCss = () => `:host{font-family:var(--app-font-family, Arial, sans-serif);display:block}.table-responsive{overflow-x:auto;margin:1rem 0}.styled-table{width:100%;border-collapse:separate;border-spacing:0;border-radius:0.5rem;overflow:hidden;box-shadow:0 0.25rem 0.5rem rgba(0,0,0,0.1)}.styled-table th,.styled-table td{padding:0.75rem 1rem;text-align:left;border-bottom:1px solid #dee2e6;transition:background-color 0.2s ease;cursor:pointer}.styled-table tbody tr:nth-child(even){background-color:#f8f9fa}.styled-table tbody tr:hover{background-color:#e9ecef}.styled-table thead tr th:first-child{border-top-left-radius:0.5rem}.styled-table thead tr th:last-child{border-top-right-radius:0.5rem}.th-primary{background-color:#0d6efd;color:white}.th-success{background-color:#198754;color:white}.th-danger{background-color:#dc3545;color:white}.th-warning{background-color:#ffc107;color:#212529}.th-info{background-color:#0dcaf0;color:#212529}.th-secondary{background-color:#6c757d;color:white}.th-dark{background-color:#212529;color:white}.th-light{background-color:#f8f9fa;color:#212529;border:1px solid #ced4da}.sort-indicator{margin-left:4px;font-size:0.75rem}`;

const TableGeneral = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    /** Columnas: { key: string, label: string, color?: TableColor } */
    columns = [];
    /** Datos: arreglo de objetos, pasado desde la app consumidora */
    data = [];
    sortedData = [];
    sortKey = '';
    sortAsc = true;
    watchData() {
        this.sortedData = [...this.data];
    }
    componentWillLoad() {
        this.sortedData = [...this.data];
    }
    sortByColumn(key) {
        if (this.sortKey === key) {
            this.sortAsc = !this.sortAsc;
        }
        else {
            this.sortKey = key;
            this.sortAsc = true;
        }
        this.sortedData = [...this.sortedData].sort((a, b) => {
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
        return (h("div", { key: '2177283a70edb93dd437ba3ac1cc351b283e547a', class: "table-responsive" }, h("table", { key: 'd9d8d12d76c05c5b0d745864812354fdd5db1493', class: "styled-table" }, h("thead", { key: '4e7ea6eb14d458dcd79bd4a00e6d877b4b8646b0' }, h("tr", { key: '17a6d0b26b163e30affedc819cde9defa7871638' }, this.columns.map(col => (h("th", { class: col.color ? `th-${col.color.toLowerCase()}` : '', onClick: () => this.sortByColumn(col.key) }, col.label, this.sortKey === col.key && (h("span", { class: "sort-indicator" }, this.sortAsc ? ' ▲' : ' ▼'))))))), h("tbody", { key: '8b8e60b3e15590bb33b1e185af33d38e745e2b19' }, this.sortedData.map(row => (h("tr", null, this.columns.map(col => (h("td", null, row[col.key]))))))))));
    }
    static get watchers() { return {
        "data": [{
                "watchData": 0
            }]
    }; }
};
TableGeneral.style = tableGeneralCss();

export { TableGeneral as table_general };

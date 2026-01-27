'use strict';

var index = require('./index-BhkWo07D.js');

const tableGeneralCss = () => `:host{font-family:var(--app-font-family, Arial, sans-serif);display:block}:host .table-responsive{overflow-x:auto;margin:1rem 0}:host .styled-table{width:100%;border-collapse:separate;border-spacing:0;border-radius:0.5rem;overflow:hidden;box-shadow:0 0.25rem 0.5rem rgba(0,0,0,0.1)}:host .styled-table th,:host .styled-table td{padding:0.75rem 1rem;text-align:left;border-bottom:1px solid #dee2e6;transition:background-color 0.2s ease;cursor:pointer}:host .styled-table tbody tr:nth-child(even){background-color:#f8f9fa}:host .styled-table tbody tr:hover{background-color:#e9ecef}:host .styled-table thead tr th:first-child{border-top-left-radius:0.5rem}:host .styled-table thead tr th:last-child{border-top-right-radius:0.5rem}:host .th-primary{background-color:#0d6efd;color:white}:host .th-success{background-color:#198754;color:white}:host .th-danger{background-color:#dc3545;color:white}:host .th-warning{background-color:#ffc107;color:#212529}:host .th-info{background-color:#0dcaf0;color:#212529}:host .th-secondary{background-color:#6c757d;color:white}:host .th-dark{background-color:#212529;color:white}:host .th-light{background-color:#f8f9fa;color:#212529;border:1px solid #ced4da}:host .sort-indicator{margin-left:4px;font-size:0.75rem}`;

const TableGeneral = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        return (index.h("div", { key: '83cbe7a375079219e5599553a0f64731d2e08632', class: "table-responsive" }, index.h("table", { key: 'da2181d7a7ee65be41b378623dc17ea5d8a36428', class: "styled-table" }, index.h("thead", { key: 'e25559d77556e662ee019c4e1f1f3d8a4174df62' }, index.h("tr", { key: '44dbaf0ef7fd1df3b66875a02bb685265cc6336b' }, columnsArr.map(col => (index.h("th", { class: col.color ? `th-${col.color.toLowerCase()}` : '', onClick: () => this.sortByColumn(col.key) }, col.label, this.sortKey === col.key && (index.h("span", { class: "sort-indicator" }, this.sortAsc ? ' ▲' : ' ▼'))))))), index.h("tbody", { key: 'db214d00ee01a68af980b369949b298512bf8631' }, this.sortedData.map(row => (index.h("tr", null, columnsArr.map(col => (index.h("td", null, row[col.key]))))))))));
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

exports.table_general = TableGeneral;

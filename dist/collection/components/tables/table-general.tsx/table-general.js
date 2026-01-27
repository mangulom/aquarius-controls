import { h } from "@stencil/core";
export class TableGeneral {
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
        return (h("div", { key: '83cbe7a375079219e5599553a0f64731d2e08632', class: "table-responsive" }, h("table", { key: 'da2181d7a7ee65be41b378623dc17ea5d8a36428', class: "styled-table" }, h("thead", { key: 'e25559d77556e662ee019c4e1f1f3d8a4174df62' }, h("tr", { key: '44dbaf0ef7fd1df3b66875a02bb685265cc6336b' }, columnsArr.map(col => (h("th", { class: col.color ? `th-${col.color.toLowerCase()}` : '', onClick: () => this.sortByColumn(col.key) }, col.label, this.sortKey === col.key && (h("span", { class: "sort-indicator" }, this.sortAsc ? ' ▲' : ' ▼'))))))), h("tbody", { key: 'db214d00ee01a68af980b369949b298512bf8631' }, this.sortedData.map(row => (h("tr", null, columnsArr.map(col => (h("td", null, row[col.key]))))))))));
    }
    static get is() { return "table-general"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["table-general.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["table-general.css"]
        };
    }
    static get properties() {
        return {
            "columns": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "any[] | string",
                    "resolved": "any[] | string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Columnas: { key: string, label: string, color }"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "columns",
                "defaultValue": "[]"
            },
            "data": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "any[] | string",
                    "resolved": "any[] | string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Datos: arreglo de objetos"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "data",
                "defaultValue": "[]"
            }
        };
    }
    static get states() {
        return {
            "sortedData": {},
            "sortKey": {},
            "sortAsc": {}
        };
    }
    static get watchers() {
        return [{
                "propName": "data",
                "methodName": "watchProps"
            }, {
                "propName": "columns",
                "methodName": "watchProps"
            }];
    }
}

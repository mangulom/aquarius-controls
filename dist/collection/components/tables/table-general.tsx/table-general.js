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
        return (h("div", { key: '1fdc7ca1222cd4903606d233cdc07a7ec4c5d78b', class: "table-responsive" }, h("table", { key: 'd81fa2c21f669c1f552d3e3b05a2996ffdd8bb43', class: "styled-table" }, h("thead", { key: '06342516323fe5d091eb595f657d28b0bd31e5a8' }, h("tr", { key: 'c4a4f4c6d4e625bbe9e1012541c4dba234085a2e' }, columnsArr.map(col => (h("th", { class: col.color ? `th-${col.color.toLowerCase()}` : '', onClick: () => this.sortByColumn(col.key) }, col.label, this.sortKey === col.key && (h("span", { class: "sort-indicator" }, this.sortAsc ? ' ▲' : ' ▼'))))))), h("tbody", { key: '84592feecf6c07a11b0b2145a476cc8aea4ee31e' }, this.sortedData.map(row => (h("tr", null, columnsArr.map(col => (h("td", null, row[col.key]))))))))));
    }
    static get is() { return "table-general"; }
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

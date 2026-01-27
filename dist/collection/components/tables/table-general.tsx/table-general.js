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
        return (h("div", { key: '11890a81eab8ed0e088cde64bb6f8d58b300494e', class: "table-responsive" }, h("table", { key: '2db05a13cfc7dc46d50b38d059eb514c07cc5289', class: "styled-table" }, h("thead", { key: 'a3608a7c31218d218f29b89425fc9c07b116b507' }, h("tr", { key: 'c7d6add0734d2f6beeae85d7debaf4a7984cf7cc' }, columnsArr.map(col => (h("th", { class: col.color ? `th-${col.color.toLowerCase()}` : '', onClick: () => this.sortByColumn(col.key) }, col.label, this.sortKey === col.key && (h("span", { class: "sort-indicator" }, this.sortAsc ? ' ▲' : ' ▼'))))))), h("tbody", { key: 'a3059ce718da497084b332430362c1da342ae6a6' }, this.sortedData.map(row => (h("tr", null, columnsArr.map(col => (h("td", null, row[col.key]))))))))));
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

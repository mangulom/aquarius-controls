import { h } from "@stencil/core";
export class TableGeneral {
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
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "{ key: string, label: string, color?: TableColor }[]",
                    "resolved": "{ key: string; label: string; color?: TableColor; }[]",
                    "references": {
                        "TableColor": {
                            "location": "local",
                            "path": "C:/Proyectos/aquarius-controls/aquarius-controls/src/components/tables/table-general.tsx/table-general.tsx",
                            "id": "src/components/tables/table-general.tsx/table-general.tsx::TableColor"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Columnas: { key: string, label: string, color?: TableColor }"
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            },
            "data": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "any[]",
                    "resolved": "any[]",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Datos: arreglo de objetos, pasado desde la app consumidora"
                },
                "getter": false,
                "setter": false,
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
                "methodName": "watchData"
            }];
    }
}

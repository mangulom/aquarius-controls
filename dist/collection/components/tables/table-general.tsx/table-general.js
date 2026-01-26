import { h } from "@stencil/core";
export class TableGeneral {
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
                    "text": "Array de objetos a mostrar"
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            },
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
            }
        };
    }
    static get states() {
        return {
            "sortKey": {},
            "sortAsc": {}
        };
    }
}

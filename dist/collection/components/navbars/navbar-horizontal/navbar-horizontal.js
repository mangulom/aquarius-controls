import { h } from "@stencil/core";
export class NavbarHorizontal {
    /** Lista de items principales */
    items = [];
    openIndex = null; // para manejar dropdown
    toggleDropdown(index) {
        this.openIndex = this.openIndex === index ? null : index;
    }
    render() {
        return (h("nav", { key: '0350eae76384003d0d4c2eccad4808e05dc0cfac', class: "navbar" }, this.items.map((item, index) => (h("div", { class: "nav-item-wrapper" }, h("button", { class: "nav-item", onClick: () => this.toggleDropdown(index) }, item.icon && h("i", { class: item.icon }), h("span", null, item.label)), item.subitems && this.openIndex === index && (h("div", { class: "subitems" }, item.subitems.map(sub => (h("button", { class: "subitem" }, sub.icon && h("i", { class: sub.icon }), h("span", null, sub.label)))))))))));
    }
    static get is() { return "navbar-horizontal"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["navbar-horizontal.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["navbar-horizontal.css"]
        };
    }
    static get properties() {
        return {
            "items": {
                "type": "unknown",
                "mutable": false,
                "complexType": {
                    "original": "NavbarItem[]",
                    "resolved": "NavbarItem[]",
                    "references": {
                        "NavbarItem": {
                            "location": "local",
                            "path": "C:/Proyectos/aquarius-controls/aquarius-controls/src/components/navbars/navbar-horizontal/navbar-horizontal.tsx",
                            "id": "src/components/navbars/navbar-horizontal/navbar-horizontal.tsx::NavbarItem"
                        }
                    }
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Lista de items principales"
                },
                "getter": false,
                "setter": false,
                "defaultValue": "[]"
            }
        };
    }
    static get states() {
        return {
            "openIndex": {}
        };
    }
}

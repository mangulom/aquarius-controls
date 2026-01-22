import { h } from "@stencil/core";
export class NavbarFooter {
    /** Lista de items principales */
    items = [];
    render() {
        return (h("footer", { key: '624f3d4b276397642083653810f1c2260d3a2988', class: "navbar-footer" }, h("div", { key: 'b40ec9c5e48c755dda8570fcf4dbc6a6f82024ba', class: "navbar-buttons" }, this.items.map((item) => (h("div", { class: "nav-item-wrapper" }, h("button", { class: "nav-item" }, item.icon && h("i", { class: item.icon }), h("span", null, item.label)), item.subitems && (h("div", { class: "subitems-up" }, item.subitems.map(sub => (h("button", { class: "subitem" }, sub.icon && h("i", { class: sub.icon }), h("span", null, sub.label)))))))))), h("div", { key: 'fc61be5d5713c991bedd6dec801cfae512c7510a', class: "footer-text" }, "REGINA BILLING - Powered by Aquarius Consulting S.A. - Todos los Derechos Reservados \u00AE 2026")));
    }
    static get is() { return "navbar-footer"; }
    static get originalStyleUrls() {
        return {
            "$": ["navbar-footer.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["navbar-footer.css"]
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
                            "path": "C:/Proyectos/aquarius-controls/aquarius-controls/src/components/navbars/navbar-footer/navbar-footer.tsx",
                            "id": "src/components/navbars/navbar-footer/navbar-footer.tsx::NavbarItem"
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
}

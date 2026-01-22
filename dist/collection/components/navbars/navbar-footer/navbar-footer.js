import { h } from "@stencil/core";
export class NavbarFooter {
    /** Lista de items principales */
    items = [];
    openIndex = null;
    toggleDropdown(index) {
        this.openIndex = this.openIndex === index ? null : index;
    }
    render() {
        return (h("footer", { key: '625a4fbd2a21eda2391e5c595fce3a9f4c9eed69', class: "navbar-footer" }, h("div", { key: 'c77d0b666469e4091c1ca038bde0d69faffea8ae', class: "navbar-buttons" }, this.items.map((item, index) => (h("div", { class: "nav-item-wrapper" }, h("button", { class: "nav-item", onClick: () => this.toggleDropdown(index) }, item.icon && h("i", { class: item.icon }), h("span", null, item.label)), item.subitems && this.openIndex === index && (h("div", { class: "subitems-up" }, item.subitems.map(sub => (h("button", { class: "subitem" }, sub.icon && h("i", { class: sub.icon }), h("span", null, sub.label)))))))))), h("div", { key: '47b21f087d1e97f2b3d5e3b8a533c398a2534d8c', class: "footer-text" }, "REGINA BILLING - Powered by Aquarius Consulting S.A. - Todos los Derechos Reservados \u00AE 2026")));
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
    static get states() {
        return {
            "openIndex": {}
        };
    }
}

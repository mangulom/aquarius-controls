import { h } from "@stencil/core";
export class CardGeneral {
    /** Ancho del card */
    width = '300px';
    /** Alto del card */
    height = 'auto';
    getStyle() {
        return {
            width: this.width,
            height: this.height,
            display: 'block'
        };
    }
    render() {
        return (h("div", { key: '9df96515899fb728087b70ce2c7bd706c37c8f63', class: "card", style: this.getStyle() }, h("div", { key: 'b1dc099d70b8c2c9862ff05ed44888b28693f9f7', class: "card-inner" }, h("slot", { key: 'a754e9f6ca47a999ad0a58c9a4e33d1b5b8bfbed' }))));
    }
    static get is() { return "card-general"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["card-general.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["card-general.css"]
        };
    }
    static get properties() {
        return {
            "width": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Ancho del card"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "width",
                "defaultValue": "'300px'"
            },
            "height": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Alto del card"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "height",
                "defaultValue": "'auto'"
            }
        };
    }
}

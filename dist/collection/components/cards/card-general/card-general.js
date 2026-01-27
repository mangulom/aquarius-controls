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
        return (h("div", { key: 'a83603b4a232e191bfbd0767ce5bf1d31186fdd3', class: "card", style: this.getStyle() }, h("div", { key: '8cdfeb8044ae3e13b9cf459df4afdad9dc136687', class: "card-inner" }, h("slot", { key: '973c335575b7f4830dea0a64632d44221d640caa' }))));
    }
    static get is() { return "card-general"; }
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

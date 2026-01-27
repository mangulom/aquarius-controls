import { h } from "@stencil/core";
export class CardGeneral {
    /** Ancho del card */
    width = '300px';
    /** Alto del card */
    height = 'auto';
    render() {
        const style = {
            width: this.width,
            height: this.height
        };
        return (h("div", { key: '2ac40adb342ef0abb113c8a5e97a7cf61c0229fe', class: "card", style: style }, h("div", { key: '9b00eee8fde4e0d5379be798f7e14057b6c497df', class: "card-inner" }, h("slot", { key: 'ac0ed36b219c628b52d2d1243aee5e9ef7f31e3f' }))));
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

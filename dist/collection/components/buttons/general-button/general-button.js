import { h } from "@stencil/core";
export class GeneralButton {
    label = 'Aceptar';
    disabled = false;
    icon = ''; // nueva prop
    render() {
        return (h("button", { key: '9b8188a71c7ad66ea730d7cc203168501f84422f', disabled: this.disabled }, this.icon && h("i", { key: '3db8a9e70bde17c58f6804c81c7cc6130897f356', class: this.icon }), h("span", { key: 'e7f6442f039fb2fcc4cb6faa15bb73cf5eca601c' }, this.label)));
    }
    static get is() { return "general-button"; }
    static get originalStyleUrls() {
        return {
            "$": ["general-button.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["general-button.css"]
        };
    }
    static get properties() {
        return {
            "label": {
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "label",
                "defaultValue": "'Aceptar'"
            },
            "disabled": {
                "type": "boolean",
                "mutable": false,
                "complexType": {
                    "original": "boolean",
                    "resolved": "boolean",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "disabled",
                "defaultValue": "false"
            },
            "icon": {
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "icon",
                "defaultValue": "''"
            }
        };
    }
}

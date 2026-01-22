import { h } from "@stencil/core";
export class GeneralButton {
    label = 'Aceptar';
    disabled = false;
    icon = ''; // Clases de Font Awesome, ejemplo: "fas fa-user"
    render() {
        return (h("button", { key: '79cbfe72e6c019c32655d90a933f169c89163fa3', disabled: this.disabled, class: "general-button" }, this.icon && h("i", { key: '277c90407ccfdc922113dc7d5597410d80043f78', class: this.icon }), h("span", { key: 'ea5d96cf89a97b01c920e510c4c25610aa47753d' }, this.label)));
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

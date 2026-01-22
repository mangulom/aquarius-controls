import { h } from "@stencil/core";
export class GeneralButton {
    label = 'Aceptar';
    disabled = false;
    icon = ''; // Clases de Font Awesome, ejemplo: "fas fa-user"
    render() {
        return (h("button", { key: '3c14614ff766683c6e369f20a9a67c8749c18fb2', disabled: this.disabled, class: "general-button" }, this.icon && h("i", { key: '0909a58293f3c33c77c474e8239e8a6094df4d90', class: this.icon }), h("span", { key: '9aac55c8539f255179ecdcdb7fd5835122a0e46a' }, this.label)));
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

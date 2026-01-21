import { h } from "@stencil/core";
export class GeneralButton {
    label = 'Aceptar';
    disabled = false;
    icon = ''; // Clases de Font Awesome, ejemplo: "fas fa-user"
    render() {
        return (h("button", { key: '8c3f149384043a7efd8dd92f2de538c5151e84cc', disabled: this.disabled, class: "general-button" }, this.icon && h("i", { key: '961829dc7428305597fba05f85847a349e628696', class: this.icon }), h("span", { key: '76866fab2a0563b29c9c81269ca5ca47d3ae9c27' }, this.label)));
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

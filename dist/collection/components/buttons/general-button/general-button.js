import { h } from "@stencil/core";
export class GeneralButton {
    label = 'Aceptar';
    disabled = false;
    icon = ''; // Clases de Font Awesome, ejemplo: "fas fa-user"
    /** Color del botón: PRIMARY, DANGER, WARNING, SUCCESS, INFO, SECONDARY */
    color = 'PRIMARY';
    render() {
        const colorClass = `btn-${this.color.toLowerCase()}`; // btn-primary, btn-danger, etc.
        return (h("button", { key: '62ee89ee3449aaa95d420d8a167962c5b34b9318', disabled: this.disabled, class: `general-button ${colorClass}` }, this.icon && h("i", { key: '8038a3e5166843712350a48529c4988ddc6d4132', class: this.icon }), h("span", { key: '5c7b9aff375d3ed5496655217408de41d824da38' }, this.label)));
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
            },
            "color": {
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
                    "text": "Color del bot\u00F3n: PRIMARY, DANGER, WARNING, SUCCESS, INFO, SECONDARY"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "color",
                "defaultValue": "'PRIMARY'"
            }
        };
    }
}

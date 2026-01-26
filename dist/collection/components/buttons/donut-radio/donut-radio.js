import { h } from "@stencil/core";
export class DonutRadio {
    name;
    value;
    label = '';
    checked = false;
    disabled = false;
    color = '';
    render() {
        return (h("label", { key: '7ae155c6e2d4b1cac9dec98ce284b8624edb652a', class: {
                'donut-radio': true,
                'disabled': this.disabled
            } }, h("input", { key: 'e15efba402243fb42c303e06144e99d960dcc517', type: "radio", name: this.name, value: this.value, defaultChecked: this.checked, disabled: this.disabled, color: this.color }), h("span", { key: 'f39152a4b5fa613765fd925e5c3fd2530e90649f', class: "control" }), this.label && h("span", { key: '153aaf89dedd23708be7df968dffd7490431b415', class: "text" }, this.label)));
    }
    static get is() { return "donut-radio"; }
    static get originalStyleUrls() {
        return {
            "$": ["donut-radio.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["donut-radio.css"]
        };
    }
    static get properties() {
        return {
            "name": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "name"
            },
            "value": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": true,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "value"
            },
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
                "defaultValue": "''"
            },
            "checked": {
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
                "attribute": "checked",
                "defaultValue": "false"
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "color",
                "defaultValue": "''"
            }
        };
    }
}

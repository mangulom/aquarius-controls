import { h } from "@stencil/core";
export class DonutRadio {
    name;
    value;
    label = '';
    checked = false;
    disabled = false;
    color = '';
    onChange = () => {
        if (!this.disabled) {
            this.checked = true;
        }
    };
    render() {
        return (h("label", { key: 'ccefbe8550f028da213cecee7164354cc1aa022f', class: {
                'donut-radio': true,
                'disabled': this.disabled
            } }, h("input", { key: 'ae29aa854a441d28826e49cfb87eb5bc9f75d95a', type: "radio", name: this.name, value: this.value, checked: this.checked, disabled: this.disabled, color: this.color, onChange: this.onChange }), h("span", { key: '1ad5badc2eb135f8200bb63f7d5891c6d7b163b3', class: "control" }), this.label && h("span", { key: '3c4a49673ed508acb35311229754183bb2e658d9', class: "text" }, this.label)));
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
                "mutable": true,
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
                "reflect": true,
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

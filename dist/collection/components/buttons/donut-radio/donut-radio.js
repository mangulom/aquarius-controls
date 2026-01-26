import { h } from "@stencil/core";
export class DonutRadio {
    el;
    name;
    label;
    color = 'PRIMARY';
    checked = false;
    onClick = () => {
        const group = document.querySelectorAll(`donut-radio[name="${this.name}"]`);
        group.forEach((radio) => {
            if (radio !== this.el) {
                radio.checked = false;
            }
        });
        this.checked = true;
    };
    render() {
        return (h("label", { key: '0c846b7790877b310e1f81c87be20b6e55cef3cd', class: "radio" }, h("input", { key: 'd7c8757409a29a5c77972168c8c1df96c1a4a0d9', type: "radio", checked: this.checked, onClick: this.onClick, color: this.color }), h("span", { key: 'db2d125ef8d471e4eccff5ed753cc15ffd929e73', class: "control" }), h("span", { key: '1a6a48c414a8f7b01e3b738775ceff0e971ca8d0', class: "label" }, this.label)));
    }
    static get is() { return "donut-radio"; }
    static get encapsulation() { return "shadow"; }
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
            "label": {
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
                "attribute": "label"
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
                "defaultValue": "'PRIMARY'"
            }
        };
    }
    static get states() {
        return {
            "checked": {}
        };
    }
    static get elementRef() { return "el"; }
}

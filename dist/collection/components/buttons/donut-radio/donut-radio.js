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
        return (h("label", { key: '7a7f1f283579e7be9fbf7e43f0cd889da337389c', class: "radio" }, h("input", { key: '205c93ca051526cb90b8085afdaf3c5ce6d0bb18', type: "radio", checked: this.checked, onClick: this.onClick, color: this.color }), h("span", { key: '8609236ae2c3ab85e7026695a4a8b06bdce99658', class: "control" }), h("span", { key: '0d48b6aee5ec8708dbb0e26b23a4ce3aa6987e40', class: "label" }, this.label)));
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

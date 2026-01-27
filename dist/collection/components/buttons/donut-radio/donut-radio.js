import { h } from "@stencil/core";
export class DonutRadio {
    el;
    name;
    label;
    color = 'PRIMARY';
    checked = false;
    // Convierte nombre de color a hexadecimal
    resolveColor() {
        const colors = {
            PRIMARY: '#0d6efd',
            SUCCESS: '#198754',
            DANGER: '#dc3545',
            WARNING: '#ffc107',
            INFO: '#0dcaf0',
            SECONDARY: '#6c757d',
            DARK: '#212529',
            LIGHT: '#ffffff',
        };
        return colors[this.color?.toUpperCase()] || this.color;
    }
    syncGroup() {
        const group = document.querySelectorAll(`donut-radio[name="${this.name}"]`);
        group.forEach((radio) => {
            if (radio !== this.el) {
                radio.checked = false;
            }
        });
    }
    onClick = () => {
        this.syncGroup();
        this.checked = true;
    };
    render() {
        const style = {
            '--radio-color': this.resolveColor(),
        };
        return (h("label", { key: '8a0364a31ca340eb7ecbe9372f807d3166c56fb9', class: "radio", style: style }, h("input", { key: '05a79f007d9fcb2c68ae113314678c01d250a824', type: "radio", checked: this.checked, onClick: this.onClick }), h("span", { key: 'e30e7d7f5528e949d94bb68c361d6dbe6648de6f', class: "control" }), h("span", { key: 'f18f6c1b769ed02149b33320bc5b402a58572660', class: "label" }, this.label)));
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

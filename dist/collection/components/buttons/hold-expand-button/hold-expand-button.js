import { h } from "@stencil/core";
export class HoldExpandButton {
    label = 'Guardar';
    icon = 'fas fa-save';
    disabled = false;
    /** Color del botón: PRIMARY, DANGER, WARNING, SUCCESS, INFO, SECONDARY */
    color = 'PRIMARY';
    /** Tiempo de presión en ms */
    holdTime = 1000;
    expanded = false;
    timer;
    startHold = () => {
        if (this.disabled)
            return;
        this.timer = setTimeout(() => {
            this.expanded = true;
        }, this.holdTime);
    };
    endHold = () => {
        clearTimeout(this.timer);
        this.expanded = false;
    };
    render() {
        const colorClass = `btn-${this.color.toLowerCase()}`;
        return (h("button", { key: '8fe8627160eb1279f81b7bbaefc5a7b0140de50b', disabled: this.disabled, class: `hold-button ${colorClass} ${this.expanded ? 'expanded' : ''}`, onMouseDown: this.startHold, onMouseUp: this.endHold, onMouseLeave: this.endHold, onTouchStart: this.startHold, onTouchEnd: this.endHold }, h("div", { key: '524a5519deb8d6546de2d9c64075d6cbcb4e7c55', class: "center" }, this.icon && h("i", { key: 'e255168c7dd22f1fbe2e0bb565618f2bb590c352', class: this.icon }), h("span", { key: 'b790f16935fedb7ce9dafb9558fd655d3e540de8', class: "label" }, this.label))));
    }
    static get is() { return "hold-expand-button"; }
    static get originalStyleUrls() {
        return {
            "$": ["hold-expand-button.css"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["hold-expand-button.css"]
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
                "defaultValue": "'Guardar'"
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
                "defaultValue": "'fas fa-save'"
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
                    "text": "Color del bot\u00F3n: PRIMARY, DANGER, WARNING, SUCCESS, INFO, SECONDARY"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "color",
                "defaultValue": "'PRIMARY'"
            },
            "holdTime": {
                "type": "number",
                "mutable": false,
                "complexType": {
                    "original": "number",
                    "resolved": "number",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "Tiempo de presi\u00F3n en ms"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "hold-time",
                "defaultValue": "1000"
            }
        };
    }
    static get states() {
        return {
            "expanded": {}
        };
    }
}

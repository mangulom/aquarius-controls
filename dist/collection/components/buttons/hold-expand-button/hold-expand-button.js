import { h } from "@stencil/core";
export class HoldExpandButton {
    label = 'Guardar';
    icon = 'fas fa-save';
    disabled = false;
    holdTime = 2000; // ms
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
        return (h("button", { key: 'b4da737a480cf2a3f7f4e9f0d4b135f1a188fb15', class: {
                'hold-btn': true,
                'expanded': this.expanded
            }, disabled: this.disabled, onMouseDown: this.startHold, onMouseUp: this.endHold, onMouseLeave: this.endHold, onTouchStart: this.startHold, onTouchEnd: this.endHold }, h("i", { key: 'b390cfb880ce25db315bed0f304e5d5a6522b1ce', class: this.icon }), h("span", { key: '9b7040dcb2d146aed1089588a413b6d551ca6b26', class: "label" }, this.label)));
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
                    "text": ""
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "hold-time",
                "defaultValue": "2000"
            }
        };
    }
    static get states() {
        return {
            "expanded": {}
        };
    }
}

import { r as registerInstance, h } from './index-DJCOPe7o.js';

const holdExpandButtonCss = () => `:host{font-family:var(--app-font-family, Arial, sans-serif)}:host button.hold-button{position:relative;width:56px;height:56px;padding:0;border-radius:50%;border:none;cursor:pointer;background:#0063A7;color:white;overflow:hidden;box-shadow:none;transition:width 0.35s ease,      border-radius 0.35s ease,      transform 0.15s ease,      filter 0.15s ease,      background-color 0.15s ease}:host button.hold-button .center{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;gap:0.5rem;pointer-events:none}:host button.hold-button::before{content:'';position:absolute;inset:3px;border:2px solid rgba(255,255,255,0.9);border-radius:50%;pointer-events:none;transition:border-color 0.15s ease, border-radius 0.35s ease}:host button.hold-button.expanded{width:180px;border-radius:20px}:host button.hold-button.expanded::before{border-radius:16px}:host button.hold-button .label{white-space:nowrap;opacity:0;max-width:0;overflow:hidden;transition:opacity 0.25s ease,      max-width 0.35s ease}:host button.hold-button.expanded .label{opacity:1;max-width:120px}:host button.hold-button:hover{filter:brightness(1.15);transform:translateY(-1px)}:host button.hold-button:active{transform:translateY(1px) scale(0.97);filter:brightness(0.9)}:host button.hold-button:active::before{border-color:rgba(255,255,255,0.6)}:host .hold-button.btn-primary{background-color:#0063a7}:host .hold-button.btn-success{background-color:#198754}:host .hold-button.btn-danger{background-color:#dc3545}:host .hold-button.btn-warning{background-color:#ffc107;color:#212529}:host .hold-button.btn-info{background-color:#1192d1;color:#212529}:host .hold-button.btn-secondary{background-color:#6c757d}:host .hold-button.btn-dark{background-color:#212529}:host .hold-button.btn-light{background-color:#f8f9fa;color:#212529}:host .hold-button.btn-light::before{border-color:#adb5bd}:host .hold-button.btn-light:hover{background-color:#e9ecef}:host button.hold-button:disabled{opacity:0.6;cursor:not-allowed;transform:none;filter:none}:host button.hold-button i{display:flex;align-items:center;padding-left:12px !important;font-size:1.2rem;line-height:1}`;

const HoldExpandButton = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
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
        return (h("button", { key: '23175cd3dbffb7948acfab85ebbdaa162b396be1', disabled: this.disabled, class: `hold-button ${colorClass} ${this.expanded ? 'expanded' : ''}`, onMouseDown: this.startHold, onMouseUp: this.endHold, onMouseLeave: this.endHold, onTouchStart: this.startHold, onTouchEnd: this.endHold }, h("div", { key: '1a464119de9c9181c77d6543db25766c8b915a9c', class: "center" }, this.icon && h("i", { key: 'ff3ccee7ce7af4702f31a04a489c30c657e3230c', class: this.icon }), h("span", { key: '06a241b2a316e857233101e1be59254b7af64283', class: "label" }, this.label))));
    }
};
HoldExpandButton.style = holdExpandButtonCss();

export { HoldExpandButton as hold_expand_button };

import { r as registerInstance, h } from './index-BLFS0Zgx.js';

const holdExpandButtonCss = () => `:host{font-family:var(--app-font-family, Arial, sans-serif)}button.hold-button{position:relative;display:inline-flex;align-items:center;justify-content:center;gap:0.5rem;width:56px;height:56px;padding:0;font-size:1rem;border-radius:50%;border:none;background:#0063A7;color:white;cursor:pointer;overflow:hidden;box-shadow:none;transition:width 0.35s ease,      border-radius 0.35s ease,      transform 0.15s ease,      filter 0.15s ease,      background-color 0.15s ease}button.hold-button::before{content:'';position:absolute;top:3px;left:3px;right:3px;bottom:3px;border:2px solid rgba(255,255,255,0.9);border-radius:50%;pointer-events:none;transition:border-color 0.15s ease, border-radius 0.35s ease}button.hold-button.expanded{width:180px;padding:0 26px;justify-content:center;border-radius:20px}button.hold-button.expanded::before{border-radius:16px}button.hold-button .label{white-space:nowrap;opacity:0;max-width:0;overflow:hidden;transition:opacity 0.25s ease,      max-width 0.35s ease}button.hold-button.expanded .label{opacity:1;max-width:120px}button.hold-button:hover{filter:brightness(1.15);transform:translateY(-1px)}button.hold-button:active{transform:translateY(1px) scale(0.97);filter:brightness(0.9)}button.hold-button:active::before{border-color:rgba(255,255,255,0.6)}.hold-button.btn-primary{background-color:#0063a7}.hold-button.btn-success{background-color:#198754}.hold-button.btn-danger{background-color:#dc3545}.hold-button.btn-warning{background-color:#ffc107;color:#212529}.hold-button.btn-info{background-color:#1192d1;color:#212529}.hold-button.btn-secondary{background-color:#6c757d}.hold-button.btn-dark{background-color:#212529}.hold-button.btn-light{background-color:#f8f9fa;color:#212529}.hold-button.btn-light::before{border-color:#adb5bd}.hold-button.btn-light:hover{background-color:#e9ecef}button.hold-button:disabled{opacity:0.6;cursor:not-allowed;transform:none;filter:none}button.hold-button i{font-size:1.2rem;display:inline-block}`;

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
        return (h("button", { key: 'ac798869385c3d6e7db24717f9605e7183eece06', disabled: this.disabled, class: `hold-button ${colorClass} ${this.expanded ? 'expanded' : ''}`, onMouseDown: this.startHold, onMouseUp: this.endHold, onMouseLeave: this.endHold, onTouchStart: this.startHold, onTouchEnd: this.endHold }, this.icon && h("i", { key: '87931c797b7e28f0756f3832720ef87978ff94d9', class: this.icon }), h("span", { key: '8c62d73926c35110e6945c0df30f5d7fe26066b0', class: "label" }, this.label)));
    }
};
HoldExpandButton.style = holdExpandButtonCss();

export { HoldExpandButton as hold_expand_button };

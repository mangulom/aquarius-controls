import { r as registerInstance, h } from './index-BLFS0Zgx.js';

const holdExpandButtonCss = () => `:host{font-family:var(--app-font-family, Arial, sans-serif)}.hold-btn{position:relative;display:inline-flex;align-items:center;justify-content:center;gap:0.6rem;width:56px;height:56px;padding:0;border-radius:50%;border:none;cursor:pointer;background-color:#0063a7;color:white;overflow:hidden;transition:width 0.35s ease,      border-radius 0.35s ease,      background-color 0.2s ease,      transform 0.15s ease}.hold-btn i{font-size:1.3rem;flex-shrink:0}.hold-btn .label{white-space:nowrap;opacity:0;max-width:0;overflow:hidden;transition:opacity 0.25s ease,      max-width 0.35s ease}.hold-btn.expanded{width:180px;border-radius:28px;padding:0 20px;justify-content:flex-start}.hold-btn.expanded .label{opacity:1;max-width:120px}.hold-btn:hover{filter:brightness(1.1)}.hold-btn:active{transform:scale(0.96)}.hold-btn:disabled{opacity:0.6;cursor:not-allowed}`;

const HoldExpandButton = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
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
};
HoldExpandButton.style = holdExpandButtonCss();

export { HoldExpandButton as hold_expand_button };

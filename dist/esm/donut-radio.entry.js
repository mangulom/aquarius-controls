import { r as registerInstance, h } from './index-Da_QcrWP.js';

const donutRadioCss = () => `:host{display:inline-block;font-family:var(--app-font-family, Arial, sans-serif)}.donut-radio{display:inline-flex;align-items:center;gap:8px;cursor:pointer;user-select:none}.donut-radio input{position:absolute;opacity:0;pointer-events:none}.donut-radio .control{--size:20px;width:var(--size);height:var(--size);border-radius:50%;flex-shrink:0;position:relative;background:#f1f3f5;border:2px solid #cfd4da;box-shadow:inset 2px 2px 4px rgba(255,255,255,0.9),      inset -2px -2px 4px rgba(0,0,0,0.18),      0 1px 2px rgba(0,0,0,0.25);transition:all 0.2s ease}.donut-radio .control::after{content:"";position:absolute;inset:4px;border-radius:50%;background:transparent;transition:all 0.2s ease}input[color="PRIMARY"]:checked+.control{border-color:#0d6efd}input[color="PRIMARY"]:checked+.control::after{background:#0d6efd}input[color="SUCCESS"]:checked+.control{border-color:#198754}input[color="SUCCESS"]:checked+.control::after{background:#198754}input[color="DANGER"]:checked+.control{border-color:#dc3545}input[color="DANGER"]:checked+.control::after{background:#dc3545}input[color="WARNING"]:checked+.control{border-color:#ffc107}input[color="WARNING"]:checked+.control::after{background:#ffc107}input[color="INFO"]:checked+.control{border-color:#0dcaf0}input[color="INFO"]:checked+.control::after{background:#0dcaf0}input[color="SECONDARY"]:checked+.control{border-color:#6c757d}input[color="SECONDARY"]:checked+.control::after{background:#6c757d}input[color="DARK"]:checked+.control{border-color:#212529}input[color="DARK"]:checked+.control::after{background:#212529}input[color="LIGHT"]:checked+.control{border-color:#adb5bd;background:#ffffff}input[color="LIGHT"]:checked+.control::after{background:radial-gradient(      circle at center,      #ffffff 40%,      #dee2e6 100%    )}.donut-radio:hover .control{filter:brightness(1.05);transform:scale(1.05)}.donut-radio.disabled{opacity:0.5;cursor:not-allowed}.donut-radio.disabled .control{filter:grayscale(0.5)}.donut-radio .text{font-size:14px;color:#212529;line-height:1.2}`;

const DonutRadio = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
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
};
DonutRadio.style = donutRadioCss();

export { DonutRadio as donut_radio };

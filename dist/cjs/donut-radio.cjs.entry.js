'use strict';

var index = require('./index-B9_JA_X3.js');

const donutRadioCss = () => `:host{display:inline-block;font-family:var(--app-font-family, Arial, sans-serif)}.donut-radio{display:inline-flex;align-items:center;gap:8px;cursor:pointer;user-select:none}.donut-radio input{position:absolute;opacity:0;pointer-events:none}.donut-radio .control{--size:20px;width:var(--size);height:var(--size);border-radius:50%;flex-shrink:0;position:relative;background:#f1f3f5;border:2px solid #cfd4da;box-shadow:inset 2px 2px 4px rgba(255,255,255,0.9),      inset -2px -2px 4px rgba(0,0,0,0.18),      0 1px 2px rgba(0,0,0,0.25);transition:all 0.2s ease}.donut-radio .control::after{content:"";position:absolute;inset:4px;border-radius:50%;background:transparent;transition:all 0.2s ease}input[color="PRIMARY"]:checked+.control{border-color:#0d6efd}input[color="PRIMARY"]:checked+.control::after{background:#0d6efd}input[color="SUCCESS"]:checked+.control{border-color:#198754}input[color="SUCCESS"]:checked+.control::after{background:#198754}input[color="DANGER"]:checked+.control{border-color:#dc3545}input[color="DANGER"]:checked+.control::after{background:#dc3545}input[color="WARNING"]:checked+.control{border-color:#ffc107}input[color="WARNING"]:checked+.control::after{background:#ffc107}input[color="INFO"]:checked+.control{border-color:#0dcaf0}input[color="INFO"]:checked+.control::after{background:#0dcaf0}input[color="SECONDARY"]:checked+.control{border-color:#6c757d}input[color="SECONDARY"]:checked+.control::after{background:#6c757d}input[color="DARK"]:checked+.control{border-color:#212529}input[color="DARK"]:checked+.control::after{background:#212529}input[color="LIGHT"]:checked+.control{border-color:#adb5bd;background:#ffffff}input[color="LIGHT"]:checked+.control::after{background:radial-gradient(      circle at center,      #ffffff 40%,      #dee2e6 100%    )}.donut-radio:hover .control{filter:brightness(1.05);transform:scale(1.05)}.donut-radio.disabled{opacity:0.5;cursor:not-allowed}.donut-radio.disabled .control{filter:grayscale(0.5)}.donut-radio .text{font-size:14px;color:#212529;line-height:1.2}`;

const DonutRadio = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    name;
    value;
    label = '';
    checked = false;
    disabled = false;
    color = '';
    render() {
        return (index.h("label", { key: '7ae155c6e2d4b1cac9dec98ce284b8624edb652a', class: {
                'donut-radio': true,
                'disabled': this.disabled
            } }, index.h("input", { key: 'fe9c642ab93129ceab9fd8b2d0994b0f4b0b17f2', type: "radio", name: this.name, value: this.value, checked: this.checked, disabled: this.disabled, color: this.color }), index.h("span", { key: '9136821124c2e562f4f31d41983d65fdb5f6c74a', class: "control" }), this.label && index.h("span", { key: 'b6cd49d5dc0caa016055e812a4aedfb452ed1b60', class: "text" }, this.label)));
    }
};
DonutRadio.style = donutRadioCss();

exports.donut_radio = DonutRadio;

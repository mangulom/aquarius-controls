'use strict';

var index = require('./index-DFncYVIQ.js');

const donutRadioCss = () => `:host{display:inline-block;font-family:var(--app-font-family, Arial, sans-serif)}.radio{display:inline-flex;align-items:center;gap:8px;cursor:pointer;user-select:none;position:relative}.radio input{position:absolute;opacity:0;pointer-events:none;appearance:none;-webkit-appearance:none;-moz-appearance:none}.control{--size:20px;width:var(--size);height:var(--size);border-radius:50%;flex-shrink:0;position:relative;background:#f1f3f5;border:2px solid #cfd4da;box-shadow:inset 2px 2px 4px rgba(255,255,255,0.9),      inset -2px -2px 4px rgba(0,0,0,0.18),      0 1px 2px rgba(0,0,0,0.25);transition:all 0.2s ease}.control::after{content:"";position:absolute;inset:4px;border-radius:50%;background:transparent;transition:all 0.2s ease}.radio input:checked+.control{border-color:var(--radio-color)}.radio input:checked+.control::after{background:var(--radio-color);box-shadow:inset 0 2px 4px rgba(0,0,0,0.35)}.radio:hover .control{filter:brightness(1.05);transform:scale(1.05)}:host(.disabled){opacity:0.5;pointer-events:none}.label{font-size:14px;color:#212529;line-height:1.2}`;

const DonutRadio = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    get el() { return index.getElement(this); }
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
        return (index.h("label", { key: '8a0364a31ca340eb7ecbe9372f807d3166c56fb9', class: "radio", style: style }, index.h("input", { key: '05a79f007d9fcb2c68ae113314678c01d250a824', type: "radio", checked: this.checked, onClick: this.onClick }), index.h("span", { key: 'e30e7d7f5528e949d94bb68c361d6dbe6648de6f', class: "control" }), index.h("span", { key: 'f18f6c1b769ed02149b33320bc5b402a58572660', class: "label" }, this.label)));
    }
};
DonutRadio.style = donutRadioCss();

exports.donut_radio = DonutRadio;

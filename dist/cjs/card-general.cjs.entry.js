'use strict';

var index = require('./index-DFncYVIQ.js');

const cardGeneralCss = () => `:host{display:block;width:100%;box-sizing:border-box;--card-primary-color:rgba(13, 110, 253, 0.15);--card-border-color:rgba(13, 110, 253, 0.5);--card-shadow-color:rgba(0, 0, 0, 0.15)}.card{width:100%;height:100%;min-height:80px;padding:12px;box-sizing:border-box;border-radius:16px;border:3px solid var(--card-border-color);background:var(--card-primary-color);box-shadow:0 6px 12px var(--card-shadow-color);transition:transform 0.2s ease,      box-shadow 0.2s ease}.card:hover{transform:translateY(-2px);box-shadow:0 10px 18px var(--card-shadow-color)}.card-inner{width:100%;height:100%;background:rgba(255, 255, 255, 0.9);border-radius:12px;padding:16px;box-sizing:border-box}@media (max-width: 768px){.card{padding:8px;border-radius:12px}.card-inner{padding:12px}}`;

const CardGeneral = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    /** Ancho del card */
    width = '300px';
    /** Alto del card */
    height = 'auto';
    getStyle() {
        return {
            width: this.width,
            height: this.height,
            display: 'block'
        };
    }
    render() {
        return (index.h("div", { key: 'a83603b4a232e191bfbd0767ce5bf1d31186fdd3', class: "card", style: this.getStyle() }, index.h("div", { key: '8cdfeb8044ae3e13b9cf459df4afdad9dc136687', class: "card-inner" }, index.h("slot", { key: '973c335575b7f4830dea0a64632d44221d640caa' }))));
    }
};
CardGeneral.style = cardGeneralCss();

exports.card_general = CardGeneral;

'use strict';

var index = require('./index-BbrHyRZC.js');

const generalButtonCss = () => `:host{font-family:var(--app-font-family, Arial, sans-serif)}button{position:relative;display:inline-flex;align-items:center;gap:0.5rem;font-size:1rem;padding:14px 22px;border-radius:20px;border:none;background:#0063A7;color:white;cursor:pointer;box-shadow:none;transition:all 0.12s ease-in-out}button::before{content:'';position:absolute;top:2px;left:2px;right:2px;bottom:2px;border:2px solid white;border-radius:18px;pointer-events:none}button:hover::before{border-color:#ffffffcc}button:active::before{border-color:#ffffffaa}button i{font-size:1.2rem;display:inline-block}`;

const GeneralButton = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    label = 'Aceptar';
    disabled = false;
    icon = ''; // Clases de Font Awesome, ejemplo: "fas fa-user"
    render() {
        return (index.h("button", { key: '3c14614ff766683c6e369f20a9a67c8749c18fb2', disabled: this.disabled, class: "general-button" }, this.icon && index.h("i", { key: '0909a58293f3c33c77c474e8239e8a6094df4d90', class: this.icon }), index.h("span", { key: '9aac55c8539f255179ecdcdb7fd5835122a0e46a' }, this.label)));
    }
};
GeneralButton.style = generalButtonCss();

exports.general_button = GeneralButton;

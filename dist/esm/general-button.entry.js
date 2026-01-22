import { r as registerInstance, h } from './index-CZ9uDaiH.js';

const generalButtonCss = () => `:host{font-family:var(--app-font-family, Arial, sans-serif)}button{position:relative;display:inline-flex;align-items:center;gap:0.5rem;font-size:1rem;padding:14px 22px;border-radius:20px;border:none;background:#0063A7;color:white;cursor:pointer;box-shadow:none;transition:all 0.12s ease-in-out}button::before{content:'';position:absolute;top:2px;left:2px;right:2px;bottom:2px;border:2px solid white;border-radius:18px;pointer-events:none}button:hover::before{border-color:#ffffffcc}button:active::before{border-color:#ffffffaa}button i{font-size:1.2rem;display:inline-block}`;

const GeneralButton = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    label = 'Aceptar';
    disabled = false;
    icon = ''; // Clases de Font Awesome, ejemplo: "fas fa-user"
    render() {
        return (h("button", { key: '8c3f149384043a7efd8dd92f2de538c5151e84cc', disabled: this.disabled, class: "general-button" }, this.icon && h("i", { key: '961829dc7428305597fba05f85847a349e628696', class: this.icon }), h("span", { key: '76866fab2a0563b29c9c81269ca5ca47d3ae9c27' }, this.label)));
    }
};
GeneralButton.style = generalButtonCss();

export { GeneralButton as general_button };

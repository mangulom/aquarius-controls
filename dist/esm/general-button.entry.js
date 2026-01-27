import { r as registerInstance, h } from './index-D9nCMDir.js';

const generalButtonCss = () => `:host{font-family:var(--app-font-family, Arial, sans-serif)}:host button{position:relative;display:inline-flex;align-items:center;gap:0.5rem;font-size:1rem;padding:14px 26px;border-radius:20px;border:none;background:#0063A7;color:white;cursor:pointer;box-shadow:none;transition:transform 0.15s ease,      filter 0.15s ease,      background-color 0.15s ease}button::before{content:'';position:absolute;top:3px;left:3px;right:3px;bottom:3px;border:2px solid rgba(255,255,255,0.9);border-radius:16px;pointer-events:none;transition:border-color 0.15s ease}.general-button.btn-light::before{border-color:#adb5bd}button:hover{filter:brightness(1.15);transform:translateY(-1px)}.general-button.btn-light:hover{background-color:#e9ecef}button:active{transform:translateY(1px) scale(0.97);filter:brightness(0.9)}button:active::before{border-color:rgba(255,255,255,0.6)}.general-button.btn-primary{background-color:#0063a7}.general-button.btn-success{background-color:#198754}.general-button.btn-danger{background-color:#dc3545}.general-button.btn-warning{background-color:#ffc107;color:#212529}.general-button.btn-info{background-color:#1192d1;color:#212529}.general-button.btn-secondary{background-color:#6c757d}.general-button.btn-dark{background-color:#212529}.general-button.btn-light{background-color:#f8f9fa;color:#212529}.general-button:disabled{opacity:0.6;cursor:not-allowed;transform:none;filter:none}button i{font-size:1.2rem;display:inline-block}`;

const GeneralButton = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    label = 'Aceptar';
    disabled = false;
    icon = ''; // Clases de Font Awesome, ejemplo: "fas fa-user"
    /** Color del botón: PRIMARY, DANGER, WARNING, SUCCESS, INFO, SECONDARY */
    color = 'PRIMARY';
    render() {
        const colorClass = `btn-${this.color.toLowerCase()}`; // btn-primary, btn-danger, etc.
        return (h("button", { key: 'a40c4adb3fb020dacad3a6078233940965c6b9a1', disabled: this.disabled, class: `general-button ${colorClass}` }, this.icon && h("i", { key: '4eafd560d987fb787a17fec0b48ab977eabd9825', class: this.icon }), h("span", { key: '1ebd34607d26bbeb25b0bbd633b631562508e7a1' }, this.label)));
    }
};
GeneralButton.style = generalButtonCss();

export { GeneralButton as general_button };

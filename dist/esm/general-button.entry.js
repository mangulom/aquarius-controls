import { r as registerInstance, h } from './index-CZ9uDaiH.js';

const generalButtonCss = () => `:host{font-family:var(--app-font-family, Arial, sans-serif)}.general-button{display:inline-flex;align-items:center;justify-content:center;gap:0.5rem;font-size:1rem;padding:10px 18px;border-radius:6px;border:none;color:white;cursor:pointer;transition:all 0.2s ease-in-out}.general-button i{font-size:1.2rem}.general-button.btn-primary{background-color:#0063a7}.general-button.btn-success{background-color:#198754}.general-button.btn-danger{background-color:#dc3545}.general-button.btn-warning{background-color:#ffc107;color:#212529;}.general-button.btn-info{background-color:#1192d1;color:#212529;}.general-button.btn-secondary{background-color:#6c757d}.general-button.btn-dark{background-color:#212529}.general-button.btn-light{background-color:#f8f9fa;color:#212529;}.general-button:hover{filter:brightness(0.9)}.general-button:disabled{opacity:0.6;cursor:not-allowed}`;

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
        return (h("button", { key: 'c251f9ba5b9fc27a803a3a83ed4afe288ad956cd', disabled: this.disabled, class: `general-button ${colorClass}` }, this.icon && h("i", { key: '55e1a44da4aaf258bc828420cdb506d062436ac8', class: this.icon }), h("span", { key: 'eb3937c3b552402ab580da8873815670478a2c4e' }, this.label)));
    }
};
GeneralButton.style = generalButtonCss();

export { GeneralButton as general_button };

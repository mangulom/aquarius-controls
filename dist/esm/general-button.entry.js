import { r as registerInstance, h } from './index-0cliFycf.js';

const generalButtonCss = () => `:host{font-family:var(--app-font-family)}button{font-size:1.2rem;padding:10px 18px;border-radius:6px;background:#0063A7;border:none;color:white;cursor:pointer;box-shadow:inset 4px 4px 8px rgba(0, 0, 0, 0.25),          inset -4px -4px 8px rgba(255, 255, 255, 0.95),           inset 1px 1px 1px rgba(0,0,0,0.25);transition:all 0.12s ease-in-out}button:hover{box-shadow:inset 1px 1px 3px rgba(0, 0, 0, 0.2),          inset -1px -1px 3px rgba(255, 255, 255, 0.8)}button:active{box-shadow:inset 3px 3px 6px rgba(0, 0, 0, 0.35),          inset -3px -3px 6px rgba(255, 255, 255, 0.7);transform:translateY(1px)}`;

const GeneralButton = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    label = 'Aceptar';
    disabled = false;
    render() {
        return (h("button", { key: '23761ec29d731e616af3dcdf72fff8443384e521', disabled: this.disabled }, this.label));
    }
};
GeneralButton.style = generalButtonCss();

export { GeneralButton as general_button };

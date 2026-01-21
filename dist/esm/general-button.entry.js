import { r as registerInstance, h } from './index-DOy5Qy8K.js';

const generalButtonCss = () => `:host{font-family:var(--app-font-family)}button{display:inline-flex;align-items:center;gap:0.5rem;font-size:1.2rem;padding:10px 18px;border-radius:6px;background:#0063A7;border:none;color:white;cursor:pointer;box-shadow:inset 4px 4px 8px rgba(0, 0, 0, 0.25),        inset -4px -4px 8px rgba(255, 255, 255, 0.95),         inset 1px 1px 1px rgba(0,0,0,0.25);transition:all 0.12s ease-in-out}button:hover{box-shadow:inset 1px 1px 3px rgba(0, 0, 0, 0.2),        inset -1px -1px 3px rgba(255, 255, 255, 0.8)}button:active{box-shadow:inset 3px 3px 6px rgba(0, 0, 0, 0.35),        inset -3px -3px 6px rgba(255, 255, 255, 0.7);transform:translateY(1px)}button i{font-size:1.2rem;display:inline-block}`;

const GeneralButton = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    label = 'Aceptar';
    disabled = false;
    icon = ''; // nueva prop
    render() {
        return (h("button", { key: '9b8188a71c7ad66ea730d7cc203168501f84422f', disabled: this.disabled }, this.icon && h("i", { key: '3db8a9e70bde17c58f6804c81c7cc6130897f356', class: this.icon }), h("span", { key: 'e7f6442f039fb2fcc4cb6faa15bb73cf5eca601c' }, this.label)));
    }
};
GeneralButton.style = generalButtonCss();

export { GeneralButton as general_button };

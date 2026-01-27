import { r as registerInstance, h } from './index-D9nCMDir.js';

const cardGeneralCss = () => `:host{display:inline-block;font-family:var(--app-font-family, Arial, sans-serif)}.card{position:relative;border-radius:16px;border:3px solid rgba(0,0,0,0.2);border-color:color-mix(      in srgb,      var(--app-primary-color, #0d6efd) 40%,      transparent    );background-color:color-mix(      in srgb,      var(--app-primary-color, #0d6efd) 12%,      transparent    );box-shadow:0 8px 20px rgba(0,0,0,0.15);padding:12px;transition:transform 0.2s ease, box-shadow 0.2s ease}.card:hover{transform:translateY(-2px);box-shadow:0 12px 26px rgba(0,0,0,0.2)}.card-inner{background:white;border-radius:12px;padding:16px;height:100%;box-sizing:border-box}`;

const CardGeneral = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    /** Ancho del card */
    width = '300px';
    /** Alto del card */
    height = 'auto';
    render() {
        const style = {
            width: this.width,
            height: this.height
        };
        return (h("div", { key: '2ac40adb342ef0abb113c8a5e97a7cf61c0229fe', class: "card", style: style }, h("div", { key: '9b00eee8fde4e0d5379be798f7e14057b6c497df', class: "card-inner" }, h("slot", { key: 'ac0ed36b219c628b52d2d1243aee5e9ef7f31e3f' }))));
    }
};
CardGeneral.style = cardGeneralCss();

export { CardGeneral as card_general };

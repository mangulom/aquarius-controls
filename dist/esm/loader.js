import { b as bootstrapLazy } from './index-vX7UoY7t.js';
export { s as setNonce } from './index-vX7UoY7t.js';
import { g as globalScripts } from './app-globals-DQuL1Twl.js';

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await globalScripts();
  return bootstrapLazy([["donut-radio",[[513,"donut-radio",{"name":[1],"label":[1],"color":[1],"checked":[32]}]]],["general-button",[[512,"general-button",{"label":[1],"disabled":[4],"icon":[1],"color":[1]}]]],["hold-expand-button",[[512,"hold-expand-button",{"label":[1],"icon":[1],"disabled":[4],"color":[1],"holdTime":[2,"hold-time"],"expanded":[32]}]]],["navbar-footer",[[512,"navbar-footer",{"items":[16],"openIndex":[32]}]]],["navbar-horizontal",[[512,"navbar-horizontal",{"items":[16],"openIndex":[32]}]]],["table-general",[[512,"table-general",{"data":[16],"columns":[16],"sortKey":[32],"sortAsc":[32]}]]]], options);
};

export { defineCustomElements };

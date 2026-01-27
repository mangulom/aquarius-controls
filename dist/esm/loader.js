import { b as bootstrapLazy } from './index-DY1aVQBJ.js';
export { s as setNonce } from './index-DY1aVQBJ.js';
import { g as globalScripts } from './app-globals-DQuL1Twl.js';

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await globalScripts();
  return bootstrapLazy([["card-general",[[769,"card-general",{"width":[1],"height":[1]}]]],["donut-radio",[[513,"donut-radio",{"name":[1],"label":[1],"color":[1],"checked":[32]}]]],["general-button",[[513,"general-button",{"label":[1],"disabled":[4],"icon":[1],"color":[1]}]]],["hold-expand-button",[[513,"hold-expand-button",{"label":[1],"icon":[1],"disabled":[4],"color":[1],"holdTime":[2,"hold-time"],"expanded":[32]}]]],["navbar-footer",[[512,"navbar-footer",{"items":[16],"openIndex":[32]}]]],["navbar-horizontal",[[513,"navbar-horizontal",{"items":[16],"openIndex":[32]}]]],["table-general",[[513,"table-general",{"columns":[1],"data":[1],"sortedData":[32],"sortKey":[32],"sortAsc":[32]},null,{"data":[{"watchProps":0}],"columns":[{"watchProps":0}]}]]]], options);
};

export { defineCustomElements };

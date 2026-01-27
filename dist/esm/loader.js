import { b as bootstrapLazy } from './index-D9nCMDir.js';
export { s as setNonce } from './index-D9nCMDir.js';
import { g as globalScripts } from './app-globals-DQuL1Twl.js';

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await globalScripts();
  return bootstrapLazy([["card-general",[[772,"card-general",{"width":[1],"height":[1]}]]],["donut-radio",[[513,"donut-radio",{"name":[1],"label":[1],"color":[1],"checked":[32]}]]],["general-button",[[512,"general-button",{"label":[1],"disabled":[4],"icon":[1],"color":[1]}]]],["hold-expand-button",[[512,"hold-expand-button",{"label":[1],"icon":[1],"disabled":[4],"color":[1],"holdTime":[2,"hold-time"],"expanded":[32]}]]],["navbar-footer",[[512,"navbar-footer",{"items":[16],"openIndex":[32]}]]],["navbar-horizontal",[[512,"navbar-horizontal",{"items":[16],"openIndex":[32]}]]],["table-general",[[512,"table-general",{"columns":[1],"data":[1],"sortedData":[32],"sortKey":[32],"sortAsc":[32]},null,{"data":[{"watchProps":0}],"columns":[{"watchProps":0}]}]]]], options);
};

export { defineCustomElements };

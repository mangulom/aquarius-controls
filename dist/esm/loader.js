import { b as bootstrapLazy } from './index-CZ9uDaiH.js';
export { s as setNonce } from './index-CZ9uDaiH.js';
import { g as globalScripts } from './app-globals-DQuL1Twl.js';

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await globalScripts();
  return bootstrapLazy([["general-button",[[512,"general-button",{"label":[1],"disabled":[4],"icon":[1]}]]],["navbar-horizontal",[[512,"navbar-horizontal",{"items":[16],"openIndex":[32]}]]]], options);
};

export { defineCustomElements };

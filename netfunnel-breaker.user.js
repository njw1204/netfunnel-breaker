// ==UserScript==
// @name         netfunnel breaker
// @version      0.1
// @description  Bypass NetFUNNEL Waiting Queue
// @license      MIT
// @homepageURL  https://github.com/njw1204/netfunnel-breaker
// @match        http://*/*
// @match        https://*/*
// @grant        unsafeWindow
// ==/UserScript==

const zxcpoivh = () => {
  if (typeof unsafeWindow.NetFunnel !== "undefined") {
    if (!unsafeWindow.NetFunnel.TS_BYPASS) {
      unsafeWindow.NetFunnel.TS_BYPASS = true;
    }
  }

  setTimeout(zxcpoivh, 1000);
};

zxcpoivh();

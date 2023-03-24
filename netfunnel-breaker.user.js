// ==UserScript==
// @name         netfunnel breaker
// @version      0.1
// @description  bypass netfunnel waiting queue
// @license      MIT
// @homepageURL  https://github.com/njw1204/netfunnel-breaker
// @match        http://*/*
// @match        https://*/*
// @grant        unsafeWindow
// ==/UserScript==

const bypass = () => {
    if (typeof unsafeWindow.NetFunnel !== 'undefined') {
        if (!unsafeWindow.NetFunnel.TS_BYPASS) {
            unsafeWindow.NetFunnel.TS_BYPASS = true;
        }
    }

    setTimeout(bypass, 100);
};

bypass();

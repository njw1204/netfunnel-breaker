// ==UserScript==
// @name         netfunnel breaker
// @description  bypass netfunnel waiting queue
// @version      0.1
// @match        http://*/*
// @match        https://*/*
// @grant        unsafeWindow
// ==/UserScript==

if (typeof unsafeWindow.NetFunnel !== 'undefined') {
    unsafeWindow.NetFunnel.TS_BYPASS = true;
}

setInterval(function() {
    if (typeof unsafeWindow.NetFunnel !== 'undefined') {
        if (!unsafeWindow.NetFunnel.TS_BYPASS) {
            unsafeWindow.NetFunnel.TS_BYPASS = true;
        }
    }
}, 100);

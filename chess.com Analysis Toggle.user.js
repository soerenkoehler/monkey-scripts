// ==UserScript==
// @name         chess.com Analysis Toggle
// @namespace    https://github.com/soerenkoehler
// @version      1.0
// @description  Auto-toggle analysis switch in chess.com.
// @author       https://github.com/soerenkoehler
// @match        *://www.chess.com/analysis*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=chess.com
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var inputChecker = window.setInterval(function() {
        console.log("TEST");
        if(enableAnalysis('#analysis')) {
            window.clearInterval(inputChecker);
        }
    }, 250);
})();

function enableAnalysis(selector) {
    var toggle = document.querySelector(selector);
    console.log("toggle is " + toggle);
    if( toggle ) {
        if( !toggle.checked ) {
            toggle.click();
            return true;
        }
    }
    return false;
}
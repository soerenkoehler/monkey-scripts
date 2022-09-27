// ==UserScript==
// @name         Amazon-Skip-Primescreen
// @namespace    https://github.com/soerenkoehler
// @version      1.0
// @description  Skip Amazon landing page.
// @author       https://github.com/soerenkoehler
// @match        *://www.amazon.de/gp/buy/prime*
// @match        *://www.amazon.de/gp/cart*
// @run-at       document-idle
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var button = document.querySelector('.prime-nothanks-button');
    if( !button ) {
        button = document.querySelector('.prime-no-thanks');
    }
    if( !button ) {
        button = document.querySelector('.declineCTA');
    }
    if( button ) {
        button.click();
    }
})();

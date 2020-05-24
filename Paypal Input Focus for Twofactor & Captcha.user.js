// ==UserScript==
// @name         Paypal Input Focus for Twofactor & Captcha
// @namespace    https://github.com/soerenkoehler
// @version      1.0
// @description  Skip Amazon landing page.
// @author       https://github.com/soerenkoehler
// @match        *://www.paypal.com/auth*
// @match        *://www.paypal.com/signin*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var inputChecker = window.setInterval(function() {
        if(focusField('#otpCode') || focusField('#captchaCode')) {
            window.clearInterval(inputChecker);
        }
    }, 250);
})();

function focusField(selector) {
    var input = document.querySelector(selector);
    if( input ) {
        input.focus();
        return true;
    }
    return false;
}

// ==UserScript==
// @name         Paypal Input Focus for Twofactor & Captcha
// @namespace    https://github.com/soerenkoehler
// @version      1.0
// @description  Skip Amazon landing page.
// @author       https://github.com/soerenkoehler
// @match        *://www.paypal.com/auth*
// @match        *://www.paypal.com/signin*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=paypal.com
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var inputLogin = false;
    var inputPwd = false;
    var input2FA = false;

    var checkLoop = window.setInterval(function() {
        inputLogin |= focusField('#email');
        inputPwd |= focusField('#password');
        input2FA |= focusField('#otpCode') || focusField('#captchaCode')
        if(inputLogin && input2FA) {
            window.clearInterval(checkLoop);
            console.log('login done')
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

// ==UserScript==
// @name         Amazon-Skip-Phonenumber
// @namespace    https://github.com/soerenkoehler
// @version      1.0
// @description  Skip Amazon landing page.
// @author       https://github.com/soerenkoehler
// @match        *://www.amazon.de/ap/accountfixup*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=amazon.com
// @run-at       document-end
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.querySelector('#ap-account-fixup-phone-skip-link').click();
})();
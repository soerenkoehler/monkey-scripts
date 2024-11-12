// ==UserScript==
// @name         Amazon-Redirect
// @namespace    https://github.com/soerenkoehler
// @version      1.0
// @description  Skip Amazon landing page.
// @author       https://github.com/soerenkoehler
// @match        *://www.amazon.de/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=amazon.com
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.location.href = 'https://www.amazon.de/gp/css/homepage.html/ref=nav_youraccount_ya';
})();
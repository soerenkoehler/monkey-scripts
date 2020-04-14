// ==UserScript==
// @name         Google Photo Fix
// @namespace    https://github.com/soerenkoehler
// @version      1.0
// @description  Fix Google Photo redirect to About screen
// @author       https://github.com/soerenkoehler
// @match        *://www.google.com/photos/about*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.location.href = 'https://photos.google.com/login';
})();
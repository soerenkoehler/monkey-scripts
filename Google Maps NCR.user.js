// ==UserScript==
// @name         Google Maps NCR
// @namespace    https://github.com/soerenkoehler
// @version      1.0
// @description  Always use maps.google.com instead of local variant.
// @author       https://github.com/soerenkoehler
// @match        *://www.google.de/maps*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.location = 'https://www.google.com/maps/@51,9.5,6z?hl=de';
})();
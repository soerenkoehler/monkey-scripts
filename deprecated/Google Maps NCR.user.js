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

    // define variable url
    var url = window.location.href;

    // add default place to avoid more redirects by Google
    if( url.indexOf('@') < 0 && url.indexOf('q=') < 0 ) {
        url = 'http://www.google.com/maps/@51,9.5,6z';
    } else {
        url = url.replace('.de', '.com');
    }

    // add default language
    if( url.indexOf('hl=') < 0 ) {
        url = url + '?hl=de';
    }

    window.location = url;
})();
// ==UserScript==
// @name         Heise Onepage
// @namespace    https://github.com/soerenkoehler
// @version      1.0
// @description  Always view heise articles on one page.
// @author       https://github.com/soerenkoehler
// @match        *://www.heise.de/*
// @run-at       document-end
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var links = document.querySelectorAll('a#pagination-all-on-one-page');
    if( links.length == 1 ) {
        window.location.href = links[0].href;
    }
})();
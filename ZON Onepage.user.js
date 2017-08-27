// ==UserScript==
// @name         ZON Onepage
// @namespace    https://github.com/soerenkoehler
// @version      1.0
// @description  Always view Zeit Online articles on one page.
// @author       https://github.com/soerenkoehler
// @match        *://www.zeit.de/*
// @run-at       document-end
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var links = document.getElementsByClassName('article-toc__onesie');
    if( links.length == 1 ) {
        window.location.href = links[0].href;
    }
})();
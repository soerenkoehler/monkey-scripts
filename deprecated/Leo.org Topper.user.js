// ==UserScript==
// @name         Leo.org Topper
// @namespace    https://github.com/soerenkoehler
// @version      1.0
// @description  Moves up the content area on leo.org online, e.g. when banners are suppressed.
// @author       https://github.com/soerenkoehler
// @match        *://leo.org/*
// @match        *://*.leo.org/*
// @run-at       document-end
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.querySelectorAll('div#mainContent')[0].style = 'top:'
        + getHeaderBottom('header.l-dict-header', getHeaderBottom('header.l-www-header', 0))
        + 'px;';
})();

function getHeaderBottom(selector, orElse) {
    var headers = document.querySelectorAll(selector);
    if( headers.length > 0 ) {
        return headers[0].getBoundingClientRect().bottom + 5;
    }
    return orElse;
}
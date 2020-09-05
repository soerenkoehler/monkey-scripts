// ==UserScript==
// @name         Heise Onepage
// @namespace    https://github.com/soerenkoehler
// @version      1.0
// @description  Always view heise articles on one page.
// @author       https://github.com/soerenkoehler
// @match        *://www.heise.de/*
// @exclude      *://www.heise.de/forum*
// @exclude      *://www.heise.de/*seite=all*
// @exclude      *://www.heise.de/*view=zoom*
// @run-at       document-end
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var button = document.querySelector('#pagination-all-on-one-page');
    if( button ) {
        button.click();
    }
})();
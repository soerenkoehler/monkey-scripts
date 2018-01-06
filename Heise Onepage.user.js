// ==UserScript==
// @name         Heise Onepage
// @namespace    https://github.com/soerenkoehler
// @version      1.0
// @description  Always view heise articles on one page.
// @author       https://github.com/soerenkoehler
// @match        *://www.heise.de/*/meldung/*
// @exclude      *://www.heise.de/*seite=*
// @run-at       document-end
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.location.href = window.location.href + '?seite=all';
})();
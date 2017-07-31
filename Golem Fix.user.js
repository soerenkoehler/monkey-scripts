// ==UserScript==
// @name         Golem Fix
// @namespace    localhost
// @version      0.1
// @description  Reload Golem.de if content is missing
// @author       Local
// @match        *://*.golem.de/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    if( document.querySelectorAll('header').length === 0) {
        window.location.reload();
    }
})();
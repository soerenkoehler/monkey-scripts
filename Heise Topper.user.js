// ==UserScript==
// @name         Heise Topper
// @namespace    https://github.com/soerenkoehler
// @version      1.0
// @description  Moves up the content area on heise online, e.g. when banners are suppressed.
// @author       https://github.com/soerenkoehler
// @match        *://www.heise.de/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.querySelectorAll('div#container_content')[0].style = 'top:0px;';
})();
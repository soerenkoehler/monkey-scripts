// ==UserScript==
// @name         Heise Fontfix
// @namespace    https://github.com/soerenkoehler
// @version      1.0
// @description  Remove Font DejaVu Sans Condensed from body tag.
// @author       https://github.com/soerenkoehler
// @match        *://www.heise.de/*
// @run-at       document-end
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.querySelectorAll('body')[0].style = 'font-family: source sans pro,arial,helvetica,sans-serif;';
})();
// ==UserScript==
// @name         Pinned Tab Fixer: Inoreader
// @namespace    https://github.com/soerenkoehler
// @version      1.0
// @description  Fix Mastodon in pinned tab.
// @author       https://github.com/soerenkoehler
// @match        *://www.inoreader.com/*
// @run-at       document-end
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    if(document.getElementById('landing_welcome_form')) {
        window.location.href = 'https://www.inoreader.com';
    }
})();

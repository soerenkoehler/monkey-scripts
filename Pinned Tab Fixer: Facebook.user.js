// ==UserScript==
// @name         Pinned Tab Fixer: Facebook
// @namespace    https://github.com/soerenkoehler
// @version      1.0
// @description  Fix Mastodon in pinned tab.
// @author       https://github.com/soerenkoehler
// @match        *://www.facebook.com/*
// @match        *://web.facebook.com/*
// @run-at       document-end
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    if(document.getElementById('login_form')) {
        window.location.href = 'https://www.facebook.com';
    }
})();
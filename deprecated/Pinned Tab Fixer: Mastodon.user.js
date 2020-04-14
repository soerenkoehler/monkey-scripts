// ==UserScript==
// @name         Pinned Tab Fixer: Mastodon
// @namespace    https://github.com/soerenkoehler
// @version      1.0
// @description  Fix Mastodon in pinned tab.
// @author       https://github.com/soerenkoehler
// @match        *://mastodon.social/about
// @run-at       document-end
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.location.href = window.location.origin;
})();
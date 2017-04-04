// ==UserScript==
// @name         Play it once Sam
// @namespace    https://gist.github.com/soerenkoehler
// @version      0.1
// @description  Starts playlist entries in single video mode instead of playlist mode.
// @author       https://gist.github.com/soerenkoehler
// @match        *://www.youtube.com/playlist*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    filterVideoLinks();
    window.addEventListener('spfdone', filterVideoLinks);
})();

function filterVideoLinks() {
    var links = document.querySelectorAll('a.pl-video-title-link');
    for (var i = 0; i < links.length; i++ ) {
        processVideoLink(links[i]);
    }
}

function processVideoLink(link) {
    var paramStart = link.href.indexOf('&');
    if( paramStart >= 0 ) {
        link.href = link.href.substr(0, paramStart);
    }
}
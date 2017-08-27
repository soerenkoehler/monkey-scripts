// ==UserScript==
// @name         Play it once Sam
// @namespace    https://github.com/soerenkoehler
// @version      1.0
// @description  Starts playlist entries in single video mode instead of playlist mode.
// @author       https://github.com/soerenkoehler
// @match        *://www.youtube.com/*
// @run-at       document-end
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.addEventListener('spfdone', doAction);
    doAction();
})();

function doAction() {
    removeAPUN();
    filterVideoLinks();
}

function removeAPUN() {
    var autoplaybar = document.getElementsByClassName('autoplay-bar')[0];
    if (autoplaybar) {
        autoplaybar.removeAttribute('class');
        document.getElementsByClassName('checkbox-on-off')[0].remove();
    }
}

function filterVideoLinks() {
    if(window.location.pathname == '/playlist') {
        var links = document.querySelectorAll('a.pl-video-title-link');
        for (var i = 0; i < links.length; i++ ) {
            processVideoLink(links[i]);
        }
    }
}

function processVideoLink(link) {
    var paramStart = link.href.indexOf('&');
    if( paramStart >= 0 ) {
        link.href = link.href.substr(0, paramStart);
    }
}
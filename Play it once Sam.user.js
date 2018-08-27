// ==UserScript==
// @name         Play it once Sam
// @namespace    https://github.com/soerenkoehler
// @version      2.0
// @description  Modifies player URL to play playlist entries in single video mode instead of playlist mode and disables auto play of suggestions.
// @author       https://github.com/soerenkoehler
// @match        *://www.youtube.com/*
// @run-at       document-end
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.addEventListener('yt-navigate-start', goToSinglePlayer);
    window.addEventListener('yt-page-data-updated', removeAutoplayButton);
})();

function goToSinglePlayer() {
    if(window.location.pathname == '/watch') {
        var url = window.location.href;
        var sep = url.indexOf('?');
        var newurl = url.substr(0, sep) + '?' + modifyPlaylistURL(url.substr(sep + 1));
        if(url != newurl) {
            window.location.replace(newurl);
        }
    }
}

function modifyPlaylistURL(query) {
    var params = {};
    query.split('&').forEach(function(p) {
        var sep = p.indexOf('=');
        params[p.substr(0,sep)] = p.substr(sep+1);
    });
    return params.index===undefined?query:'v=' + params.v;
}

function removeAutoplayButton() {
    if(window.location.pathname == '/watch') {
        var buttons = document.querySelectorAll('paper-toggle-button.ytd-compact-autoplay-renderer');
        for(var i = 0; i < buttons.length; i++) {
            if( buttons[i].checked ) {
                buttons[i].click();
            }
        }
    }
}

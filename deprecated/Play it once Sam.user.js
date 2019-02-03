// ==UserScript==
// @name         Play it once Sam
// @namespace    https://github.com/soerenkoehler
// @version      2.1
// @description  Modifies player URL to play playlist entries in single video mode instead of playlist mode and disables auto play of suggestions.
// @author       https://github.com/soerenkoehler
// @match        *://www.youtube.com/*
// @run-at       document-end
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.addEventListener('yt-navigate-finish', goToSinglePlayer);
    document.addEventListener('yt-page-data-fetched', removeAutoplayButton);
})();

function goToSinglePlayer() {
    console.log("goToSinglePlayer");
    if(window.location.pathname == '/watch') {
        var url = window.location.href;
        var sep = url.indexOf('?');
        var newurl = url.substr(0, sep) + '?' + modifyPlaylistURL(url.substr(sep + 1));
        console.log(url + " => " + newurl);
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
    console.log("removeAutoplayButton");
    if(window.location.pathname == '/watch') {
        var buttons = document.querySelectorAll('paper-toggle-button.ytd-compact-autoplay-renderer');
        console.log(buttons.length);
        for(var i = 0; i < buttons.length; i++) {
            console.log(buttons[i].checked);
            if( buttons[i].checked ) {
                buttons[i].click();
            }
        }
    }
}

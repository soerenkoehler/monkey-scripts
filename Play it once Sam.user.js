// ==UserScript==
// @name         Play it once Sam
// @namespace    https://github.com/soerenkoehler
// @version      2.0
// @description  Modifies window location to play playlist entries in single video mode instead of playlist mode.
// @author       https://github.com/soerenkoehler
// @match        *://www.youtube.com/*
// @run-at       document-end
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    if(window.location.pathname == '/playlist') {
        window.addEventListener('yt-navigate-start', goToSinglePlayer);
    }
    if(window.location.pathname == '/watch') {
        window.addEventListener('viewport-load', removeAutoplayButton);
    }
})();

function goToSinglePlayer() {
    var url = window.location.href;
    var sep = url.indexOf('?');
    var newurl = url.substr(0, sep) + '?' + modifyPlaylistURL(url.substr(sep + 1));
    if(url != newurl) {
        window.location.replace(newurl);
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
    console.info('Test!');
    var buttons = document.querySelectorAll('paper-toggle-button.ytd-compact-autoplay-renderer');
    for(var i = 0; i < buttons.length; i++) {
        buttons[i].checked = false;
        buttons[i].fire('change');
    }
}

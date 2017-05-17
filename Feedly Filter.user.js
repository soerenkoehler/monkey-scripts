// ==UserScript==
// @name         Feedly Filter
// @namespace    https://github.com/soerenkoehler
// @version      1.0
// @description  Mark entries in feedly's web UI.
// @author       https://github.com/soerenkoehler
// @match        *://feedly.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var origASK = devhd.io.ASK;
    devhd.io.ASK= function(a, b) {
        if(a.url.indexOf('streams/contents')>=0) {
            var origOnComplete = a.onComplete;
            a.onComplete = function(c, d, e) {
                var result = origOnComplete(c, d, e);
                filter();
                return result;
            };
        }
        return origASK(a, b);
    };
})();

function filter() {
    var links = document.querySelectorAll('a.title');
    if(links.length === 0) {
        window.setTimeout(filter, 1000);
    } else {
        for (var i = 0; i < links.length; i++ ) {
            applyFilters(links[i]);
        }
    }
}

/* These are the rules - feel free to edit your local copy */
function applyFilters(link) {
    styleEntry(link, 'background:#ccf', ['/video/','zeit.de/thema/']);
    styleEntry(link, 'background:#fcc', ['ze.tt','bento.de','shop.zeit.de','/angebote/']);
}

function styleEntry(link, style, patterns) {
    var box = link.parentNode.parentNode;
    if(matchesFilter(link.href, patterns)) {
        box.style = style;
    }
}

function matchesFilter(text, patterns) {
    for(var i = 0; i < patterns.length; i++) {
        if(text.indexOf(patterns[i]) >= 0 ) {
            return true;
        }
    }
    return false;
}

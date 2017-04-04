// ==UserScript==
// @name         Feedly Filter
// @namespace    https://gist.github.com/soerenkoehler
// @version      0.1
// @description  Mark entries in feedly's web UI.
// @author       https://gist.github.com/soerenkoehler
// @match        *://feedly.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    initialize();
    filter.Timer(10000, Infinity);
})();

function filter(start, count) {
    if(document.visibilityState == 'visible') {
        var links = document.querySelectorAll('a.title');
        for (var i = 0; i < links.length; i++ ) {
            applyFilters(links[i]);
        }
    }
}

/* These are the rules - feel free to edit your local copy */
function applyFilters(link) {
    styleEntry(link, 'background:#ccf', ['/video/']);
    styleEntry(link, 'background:#fcc', ['ze.tt','bento.de','shop.zeit.de']);
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

function initialize() {
    Function.prototype.Timer = function (interval, calls, onend) {
        var count = 0;
        var payloadFunction = this;
        var startTime = new Date();
        var callbackFunction = function () {
            return payloadFunction(startTime, count);
        };
        var endFunction = function () {
            if (onend) {
                onend(startTime, count, calls);
            }
        };
        var timerFunction = function () {
            count++;
            if (count <= calls && callbackFunction() !== false) {
                window.setTimeout(timerFunction, interval);
            } else {
                endFunction();
            }
        };
        timerFunction();
    };
}
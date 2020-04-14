// ==UserScript==
// @name ZON Autoconsent
// @namespace https://github.com/soerenkoehler
// @version 1.0
// @description Autoclick Zeit Online consent button.
// @author https://github.com/soerenkoehler
// @match *://www.zeit.de/zustimmung*
// @run-at document-end
// @grant none
// ==/UserScript==

(function() {
    'use strict';

    var buttonChecker = window.setInterval(function() {
        var button = document.querySelector('.box__accbtn button');
        if( button ) {
            window.clearInterval(buttonChecker);
            button.click();
        }
    }, 250);

})();
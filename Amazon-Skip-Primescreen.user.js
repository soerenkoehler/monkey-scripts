// ==UserScript==
// @name         Amazon-Skip-Primescreen
// @namespace    https://github.com/soerenkoehler
// @version      1.0
// @description  Skip Amazon Primescreen.
// @author       https://github.com/soerenkoehler
// @match        *://www.amazon.de/gp/cart*
// @match        *://www.amazon.de/gp/buy*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=amazon.com
// @run-at       document-body
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    console.log("First run: " + window.location);

    function findPrime() {
        var button;
        [
            '.prime-nothanks-button',
            '.prime-no-thanks',
            '.prime-no-button button',
            '.declineCTA'
        ].forEach(query => {
            const elem = document.querySelector(query);
            if( elem ) {
                const info = JSON.stringify(elem, ["id", "nodeName", "className"]);
                console.log("Found: " + info);
                button = elem;
            }
        });
        return button;
    }

    function runLoop(clickcondition, endcondition) {
        console.log("Start loop: " + window.location);
        const buttonChecker = window.setInterval(function() {
            const button = findPrime();
            if( clickcondition(button) ) {
                const info = JSON.stringify(button, ["id", "nodeName", "className"]);
                console.log("Click: " + info);
                button.click();
            }
            if( endcondition(button) ) {
                console.log("End loop: " + window.location);
                window.clearInterval(buttonChecker);
            }
        }, 500);
    }

    if( window.location.href.includes("prime") ) {
        runLoop( e => e != null, e => e != null );
    } else if( window.location.href.includes("spc") ) {
        runLoop( e => e != null, e => e == null );
    }
})();
